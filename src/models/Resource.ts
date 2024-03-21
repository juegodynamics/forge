import {Quantity} from './elements';

export type ResourceName = string;

export interface Resource {
    /*
    {
        infinite: false,
        minimum: 0,
        mining_time: 1,
        name: 'aluminum-ore',
        products: [
            {
                amount: 1,
                name: 'aluminum-ore',
                type: 'item',
            },
        ],
        resource_category: 'basic-solid',
    }
    */
    name: ResourceName;

    infinite: boolean;
    minimum: number;
    mining_time: number;
    products: Quantity[];
    resource_category: string;
    required_fluid?: Quantity;
}
