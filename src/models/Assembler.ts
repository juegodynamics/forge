export type AssemblerName = string;

export interface Assembler {
    /*
    {
        allowed_effects: {
            consumption: true,
            pollution: true,
            productivity: true,
            speed: true,
        },
        crafting_categories: [
            'basic-crafting',
            'crafting',
            'advanced-crafting',
            'crafting-with-fluid',
        ],
        crafting_speed: 2,
        ingredient_count: 255,
        module_inventory_size: 5,
        name: '5d-assembling-machine-04',
    }
    */
    name: AssemblerName;

    allowed_effects: {
        consumption: boolean;
        pollution: boolean;
        productivity: boolean;
        speed: boolean;
    };
    crafting_categories: string[];
    crafting_speed: number;
    ingredient_count: number;
    module_inventory_size: number;
}
