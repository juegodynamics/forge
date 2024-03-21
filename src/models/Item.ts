export type ItemName = string;

export interface Item {
    /*
    {
        name: '4-to-4-pipe',
        stack_size: 500,
        type: 'item',
    }
    */
    name: ItemName;

    type: 'item' | 'fluid' | string;
    stack_size?: number;
}
