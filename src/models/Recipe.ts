import {Quantity} from './elements';

export type RecipeName = string;

export interface Recipe {
    /*
    {
        category: 'crafting',
        energy: 0.5,
        ingredients: [
            {
                amount: 1,
                name: 'pipe',
                type: 'item',
            },
            {
                amount: 4,
                name: 'small-pipe-coupler',
                type: 'item',
            },
            {
                amount: 20,
                name: 'underground-pipe-segment-t1',
                type: 'item',
            },
        ],
        name: '4-to-4-pipe',
        products: [
            {
                amount: 1,
                name: '4-to-4-pipe',
                type: 'item',
            },
        ],
    }
     */
    name: RecipeName;

    category: string;
    energy: number;
    ingredients?: Quantity[];
    products?: Quantity[];
}
