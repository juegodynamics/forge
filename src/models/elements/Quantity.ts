export interface Quantity {
    amount: number;
    name: string;
    type?: 'item' | 'fluid' | 'capsule' | 'tool';
    minimum_temperature?: number;
    maximum_temperature?: number;
    catalyst_amount?: number;
    fluidbox_index?: number;
}
