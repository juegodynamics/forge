import {assemblerData, itemData, recipeData, resourceData} from 'data';
import {Assembler, Item, Resource, ItemName, Recipe, RecipeName} from 'models';

export interface DBWrapper {
    getAssembler: (name: string) => Assembler;
    getAllAssemblers: (names: string[]) => Assembler[];
    getAllAssemblersByCategory: (category: string) => Assembler[];

    getItem: (name: string) => Item;

    getRecipe: (name: string) => Recipe;
    getAllRecipesForIngredient: (productName: string) => Recipe[];
    getAllRecipesForProduct: (productName: string) => Recipe[];

    getResource: (name: string) => Resource;
}

export class InMemoryDBWrapper implements DBWrapper {
    assemblerData = assemblerData;
    itemData = itemData;
    recipeData = recipeData;
    resourceData = resourceData;

    // For a given item, get all recipes where that
    // item is an ingredient
    ingredientIndex: Record<ItemName, RecipeName[]>;

    // For a given item, get all recipes where that
    // item is an product
    productIndex: Record<ItemName, RecipeName[]>;

    constructor() {
        this.ingredientIndex = Object.values(this.recipeData).reduce<
            typeof this.ingredientIndex
        >(
            (priorIndex, nextRecipe) => ({
                ...priorIndex,
                ...(nextRecipe.ingredients || []).reduce(
                    (priorIngredients, nextIngredient) => ({
                        ...priorIngredients,
                        [nextIngredient.name]: [
                            ...(priorIndex[nextIngredient.name] || []),
                            nextRecipe.name,
                        ],
                    }),
                    {}
                ),
            }),
            {}
        );

        this.productIndex = Object.values(this.recipeData).reduce<
            typeof this.productIndex
        >(
            (priorIndex, nextRecipe) => ({
                ...priorIndex,
                ...(nextRecipe.products || []).reduce(
                    (priorProducts, nextProduct) => ({
                        ...priorProducts,
                        [nextProduct.name]: [
                            ...(priorIndex[nextProduct.name] || []),
                            nextRecipe.name,
                        ],
                    }),
                    {}
                ),
            }),
            {}
        );
    }

    getAssembler(name: string): Assembler {
        return this.assemblerData[name];
    }
    getAllAssemblers(names: string[]): Assembler[] {
        const results: Assembler[] = [];
        names.forEach((name) => results.push(this.assemblerData[name]));
        return results;
    }
    getAllAssemblersByCategory(category: string): Assembler[] {
        const results: Assembler[] = [];
        Object.values(this.assemblerData).forEach((assembler) => {
            if (
                assembler.crafting_categories.find(
                    (value) => value === category
                )
            ) {
                results.push(assembler);
            }
        });
        return results;
    }

    getItem(name: string): Item {
        return this.itemData[name];
    }

    getRecipe(name: string): Recipe {
        return this.recipeData[name];
    }

    getAllRecipesForIngredient(ingredientName: string): Recipe[] {
        if (!this.ingredientIndex[ingredientName]) {
            console.warn(`No recipes found producing '${ingredientName}'`);
            return [];
        }
        return this.ingredientIndex[ingredientName].map(
            (recipeName) => this.recipeData[recipeName]
        );
    }

    getAllRecipesForProduct(productName: string): Recipe[] {
        if (!this.productIndex[productName]) {
            console.warn(`No recipes found producing '${productName}'`);
            return [];
        }
        return this.productIndex[productName].map(
            (recipeName) => this.recipeData[recipeName]
        );
    }

    getResource(name: string): Resource {
        return this.resourceData[name];
    }
}

export const db = new InMemoryDBWrapper();
