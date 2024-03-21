import {Resource} from 'models';

export const resourceData: Record<string, Resource> = {
    'aluminum-ore': {
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
    },
    'bismuth-ore': {
        infinite: false,
        minimum: 0,
        mining_time: 0.45,
        name: 'bismuth-ore',
        products: [
            {
                amount: 1,
                name: 'bismuth-ore',
                type: 'item',
            },
            {
                amount: 1,
                name: 'sulfur',
                type: 'item',
            },
        ],
        required_fluid: {
            amount: 3,
            name: 'chlorine',
            type: 'fluid',
        },
        resource_category: 'basic-solid',
    },
    coal: {
        infinite: false,
        minimum: 0,
        mining_time: 0.9,
        name: 'coal',
        products: [
            {
                amount: 1,
                name: 'coal',
                type: 'item',
            },
        ],
        resource_category: 'basic-solid',
    },
    'copper-ore': {
        infinite: false,
        minimum: 0,
        mining_time: 1.1,
        name: 'copper-ore',
        products: [
            {
                amount: 1,
                name: 'copper-ore',
                type: 'item',
            },
        ],
        resource_category: 'basic-solid',
    },
    'crude-oil': {
        infinite: false,
        minimum: 25000,
        mining_time: 1,
        name: 'crude-oil',
        products: [
            {
                amount: 20,
                name: 'crude-oil',
                type: 'fluid',
            },
        ],
        resource_category: 'oil',
    },
    deep_oil: {
        infinite: false,
        minimum: 25000,
        mining_time: 1,
        name: 'deep_oil',
        products: [
            {
                amount: 20,
                name: 'crude-oil',
                type: 'fluid',
            },
        ],
        resource_category: 'oil',
    },
    gas: {
        infinite: false,
        minimum: 20000,
        mining_time: 1,
        name: 'gas',
        products: [
            {
                amount: 20,
                name: 'gas',
                type: 'fluid',
            },
        ],
        resource_category: 'gas',
    },
    geothermal: {
        infinite: true,
        minimum: 10000,
        mining_time: 1,
        name: 'geothermal',
        products: [
            {
                amount: 1,
                name: 'geothermal-water',
                type: 'fluid',
            },
        ],
        resource_category: 'geothermal',
    },
    'geothermal-blue': {
        infinite: true,
        minimum: 10000,
        mining_time: 1,
        name: 'geothermal-blue',
        products: [
            {
                amount: 1,
                name: 'geothermal-water-blue',
                type: 'fluid',
            },
        ],
        resource_category: 'geothermal',
    },
    'geothermal-green': {
        infinite: true,
        minimum: 10000,
        mining_time: 1,
        name: 'geothermal-green',
        products: [
            {
                amount: 1,
                name: 'geothermal-water-green',
                type: 'fluid',
            },
        ],
        resource_category: 'geothermal',
    },
    'geothermal-purple': {
        infinite: true,
        minimum: 10000,
        mining_time: 1,
        name: 'geothermal-purple',
        products: [
            {
                amount: 1,
                name: 'geothermal-water-purple',
                type: 'fluid',
            },
        ],
        resource_category: 'geothermal',
    },
    'gold-ore': {
        infinite: false,
        minimum: 0,
        mining_time: 1,
        name: 'gold-ore',
        products: [
            {
                amount: 1,
                name: 'gold-ore',
                type: 'item',
            },
        ],
        resource_category: 'basic-solid',
    },
    graphite: {
        infinite: false,
        minimum: 0,
        mining_time: 1,
        name: 'graphite',
        products: [
            {
                amount: 1,
                name: 'flake-graphite',
                type: 'item',
            },
        ],
        required_fluid: {
            amount: 1,
            name: 'steam',
            type: 'fluid',
        },
        resource_category: 'basic-solid',
    },
    imersite: {
        infinite: false,
        minimum: 50,
        mining_time: 2,
        name: 'imersite',
        products: [
            {
                amount: 1,
                name: 'raw-imersite',
                type: 'item',
            },
        ],
        resource_category: 'kr-quarry',
    },
    'iron-ore': {
        infinite: false,
        minimum: 0,
        mining_time: 1.2,
        name: 'iron-ore',
        products: [
            {
                amount: 1,
                name: 'iron-ore',
                type: 'item',
            },
        ],
        resource_category: 'basic-solid',
    },
    'lead-ore': {
        infinite: false,
        minimum: 0,
        mining_time: 1,
        name: 'lead-ore',
        products: [
            {
                amount: 1,
                name: 'lead-ore',
                type: 'item',
            },
        ],
        resource_category: 'basic-solid',
    },
    'manganese-ore': {
        infinite: false,
        minimum: 0,
        mining_time: 1,
        name: 'manganese-ore',
        products: [
            {
                amount: 1,
                name: 'manganese-ore',
                type: 'item',
            },
        ],
        resource_category: 'basic-solid',
    },
    'mineral-water': {
        infinite: false,
        minimum: 20000,
        mining_time: 1,
        name: 'mineral-water',
        products: [
            {
                amount: 20,
                name: 'mineral-water',
                type: 'fluid',
            },
        ],
        resource_category: 'basic-fluid',
    },
    'nickel-ore': {
        infinite: false,
        minimum: 0,
        mining_time: 1,
        name: 'nickel-ore',
        products: [
            {
                amount: 1,
                name: 'nickel-ore',
                type: 'item',
            },
        ],
        resource_category: 'basic-solid',
    },
    'rare-metals': {
        infinite: false,
        minimum: 0,
        mining_time: 3,
        name: 'rare-metals',
        products: [
            {
                amount: 1,
                name: 'raw-rare-metals',
                type: 'item',
            },
        ],
        required_fluid: {
            amount: 25,
            name: 'chlorine',
            type: 'fluid',
        },
        resource_category: 'basic-solid',
    },
    salt: {
        infinite: false,
        minimum: 0,
        mining_time: 0.5,
        name: 'salt',
        products: [
            {
                amount: 1,
                name: 'salt',
                type: 'item',
            },
        ],
        resource_category: 'basic-solid',
    },
    'se-beryllium-ore': {
        infinite: false,
        minimum: 0,
        mining_time: 4,
        name: 'se-beryllium-ore',
        products: [
            {
                amount: 1,
                name: 'se-beryllium-ore',
                type: 'item',
            },
        ],
        resource_category: 'basic-solid',
    },
    'se-core-fragment-aluminum-ore': {
        infinite: true,
        minimum: 1,
        mining_time: 14.25,
        name: 'se-core-fragment-aluminum-ore',
        products: [
            {
                amount: 1,
                name: 'se-core-fragment-aluminum-ore',
                type: 'item',
            },
        ],
        resource_category: 'se-core-mining',
    },
    'se-core-fragment-aluminum-ore-sealed': {
        infinite: true,
        minimum: 1,
        mining_time: 14.25,
        name: 'se-core-fragment-aluminum-ore-sealed',
        products: [
            {
                amount: 1,
                name: 'se-core-fragment-aluminum-ore',
                type: 'item',
            },
        ],
        resource_category: 'se-core-mining',
    },
    'se-core-fragment-bismuth-ore': {
        infinite: true,
        minimum: 1,
        mining_time: 10.33125,
        name: 'se-core-fragment-bismuth-ore',
        products: [
            {
                amount: 1,
                name: 'se-core-fragment-bismuth-ore',
                type: 'item',
            },
        ],
        resource_category: 'se-core-mining',
    },
    'se-core-fragment-bismuth-ore-sealed': {
        infinite: true,
        minimum: 1,
        mining_time: 10.33125,
        name: 'se-core-fragment-bismuth-ore-sealed',
        products: [
            {
                amount: 1,
                name: 'se-core-fragment-bismuth-ore',
                type: 'item',
            },
        ],
        resource_category: 'se-core-mining',
    },
    'se-core-fragment-coal': {
        infinite: true,
        minimum: 1,
        mining_time: 13.5375,
        name: 'se-core-fragment-coal',
        products: [
            {
                amount: 1,
                name: 'se-core-fragment-coal',
                type: 'item',
            },
        ],
        resource_category: 'se-core-mining',
    },
    'se-core-fragment-coal-sealed': {
        infinite: true,
        minimum: 1,
        mining_time: 13.5375,
        name: 'se-core-fragment-coal-sealed',
        products: [
            {
                amount: 1,
                name: 'se-core-fragment-coal',
                type: 'item',
            },
        ],
        resource_category: 'se-core-mining',
    },
    'se-core-fragment-copper-ore': {
        infinite: true,
        minimum: 1,
        mining_time: 14.9625,
        name: 'se-core-fragment-copper-ore',
        products: [
            {
                amount: 1,
                name: 'se-core-fragment-copper-ore',
                type: 'item',
            },
        ],
        resource_category: 'se-core-mining',
    },
    'se-core-fragment-copper-ore-sealed': {
        infinite: true,
        minimum: 1,
        mining_time: 14.9625,
        name: 'se-core-fragment-copper-ore-sealed',
        products: [
            {
                amount: 1,
                name: 'se-core-fragment-copper-ore',
                type: 'item',
            },
        ],
        resource_category: 'se-core-mining',
    },
    'se-core-fragment-crude-oil': {
        infinite: true,
        minimum: 1,
        mining_time: 14.25,
        name: 'se-core-fragment-crude-oil',
        products: [
            {
                amount: 1,
                name: 'se-core-fragment-crude-oil',
                type: 'item',
            },
        ],
        resource_category: 'se-core-mining',
    },
    'se-core-fragment-crude-oil-sealed': {
        infinite: true,
        minimum: 1,
        mining_time: 14.25,
        name: 'se-core-fragment-crude-oil-sealed',
        products: [
            {
                amount: 1,
                name: 'se-core-fragment-crude-oil',
                type: 'item',
            },
        ],
        resource_category: 'se-core-mining',
    },
    'se-core-fragment-gas': {
        infinite: true,
        minimum: 1,
        mining_time: 14.25,
        name: 'se-core-fragment-gas',
        products: [
            {
                amount: 1,
                name: 'se-core-fragment-gas',
                type: 'item',
            },
        ],
        resource_category: 'se-core-mining',
    },
    'se-core-fragment-gas-sealed': {
        infinite: true,
        minimum: 1,
        mining_time: 14.25,
        name: 'se-core-fragment-gas-sealed',
        products: [
            {
                amount: 1,
                name: 'se-core-fragment-gas',
                type: 'item',
            },
        ],
        resource_category: 'se-core-mining',
    },
    'se-core-fragment-gold-ore': {
        infinite: true,
        minimum: 1,
        mining_time: 14.25,
        name: 'se-core-fragment-gold-ore',
        products: [
            {
                amount: 1,
                name: 'se-core-fragment-gold-ore',
                type: 'item',
            },
        ],
        resource_category: 'se-core-mining',
    },
    'se-core-fragment-gold-ore-sealed': {
        infinite: true,
        minimum: 1,
        mining_time: 14.25,
        name: 'se-core-fragment-gold-ore-sealed',
        products: [
            {
                amount: 1,
                name: 'se-core-fragment-gold-ore',
                type: 'item',
            },
        ],
        resource_category: 'se-core-mining',
    },
    'se-core-fragment-graphite': {
        infinite: true,
        minimum: 1,
        mining_time: 14.25,
        name: 'se-core-fragment-graphite',
        products: [
            {
                amount: 1,
                name: 'se-core-fragment-graphite',
                type: 'item',
            },
        ],
        resource_category: 'se-core-mining',
    },
    'se-core-fragment-graphite-sealed': {
        infinite: true,
        minimum: 1,
        mining_time: 14.25,
        name: 'se-core-fragment-graphite-sealed',
        products: [
            {
                amount: 1,
                name: 'se-core-fragment-graphite',
                type: 'item',
            },
        ],
        resource_category: 'se-core-mining',
    },
    'se-core-fragment-imersite': {
        infinite: true,
        minimum: 1,
        mining_time: 21.375,
        name: 'se-core-fragment-imersite',
        products: [
            {
                amount: 1,
                name: 'se-core-fragment-imersite',
                type: 'item',
            },
        ],
        resource_category: 'se-core-mining',
    },
    'se-core-fragment-imersite-sealed': {
        infinite: true,
        minimum: 1,
        mining_time: 21.375,
        name: 'se-core-fragment-imersite-sealed',
        products: [
            {
                amount: 1,
                name: 'se-core-fragment-imersite',
                type: 'item',
            },
        ],
        resource_category: 'se-core-mining',
    },
    'se-core-fragment-iron-ore': {
        infinite: true,
        minimum: 1,
        mining_time: 15.675,
        name: 'se-core-fragment-iron-ore',
        products: [
            {
                amount: 1,
                name: 'se-core-fragment-iron-ore',
                type: 'item',
            },
        ],
        resource_category: 'se-core-mining',
    },
    'se-core-fragment-iron-ore-sealed': {
        infinite: true,
        minimum: 1,
        mining_time: 15.675,
        name: 'se-core-fragment-iron-ore-sealed',
        products: [
            {
                amount: 1,
                name: 'se-core-fragment-iron-ore',
                type: 'item',
            },
        ],
        resource_category: 'se-core-mining',
    },
    'se-core-fragment-lead-ore': {
        infinite: true,
        minimum: 1,
        mining_time: 14.25,
        name: 'se-core-fragment-lead-ore',
        products: [
            {
                amount: 1,
                name: 'se-core-fragment-lead-ore',
                type: 'item',
            },
        ],
        resource_category: 'se-core-mining',
    },
    'se-core-fragment-lead-ore-sealed': {
        infinite: true,
        minimum: 1,
        mining_time: 14.25,
        name: 'se-core-fragment-lead-ore-sealed',
        products: [
            {
                amount: 1,
                name: 'se-core-fragment-lead-ore',
                type: 'item',
            },
        ],
        resource_category: 'se-core-mining',
    },
    'se-core-fragment-manganese-ore': {
        infinite: true,
        minimum: 1,
        mining_time: 14.25,
        name: 'se-core-fragment-manganese-ore',
        products: [
            {
                amount: 1,
                name: 'se-core-fragment-manganese-ore',
                type: 'item',
            },
        ],
        resource_category: 'se-core-mining',
    },
    'se-core-fragment-manganese-ore-sealed': {
        infinite: true,
        minimum: 1,
        mining_time: 14.25,
        name: 'se-core-fragment-manganese-ore-sealed',
        products: [
            {
                amount: 1,
                name: 'se-core-fragment-manganese-ore',
                type: 'item',
            },
        ],
        resource_category: 'se-core-mining',
    },
    'se-core-fragment-mineral-water': {
        infinite: true,
        minimum: 1,
        mining_time: 14.25,
        name: 'se-core-fragment-mineral-water',
        products: [
            {
                amount: 1,
                name: 'se-core-fragment-mineral-water',
                type: 'item',
            },
        ],
        resource_category: 'se-core-mining',
    },
    'se-core-fragment-mineral-water-sealed': {
        infinite: true,
        minimum: 1,
        mining_time: 14.25,
        name: 'se-core-fragment-mineral-water-sealed',
        products: [
            {
                amount: 1,
                name: 'se-core-fragment-mineral-water',
                type: 'item',
            },
        ],
        resource_category: 'se-core-mining',
    },
    'se-core-fragment-nickel-ore': {
        infinite: true,
        minimum: 1,
        mining_time: 14.25,
        name: 'se-core-fragment-nickel-ore',
        products: [
            {
                amount: 1,
                name: 'se-core-fragment-nickel-ore',
                type: 'item',
            },
        ],
        resource_category: 'se-core-mining',
    },
    'se-core-fragment-nickel-ore-sealed': {
        infinite: true,
        minimum: 1,
        mining_time: 14.25,
        name: 'se-core-fragment-nickel-ore-sealed',
        products: [
            {
                amount: 1,
                name: 'se-core-fragment-nickel-ore',
                type: 'item',
            },
        ],
        resource_category: 'se-core-mining',
    },
    'se-core-fragment-omni': {
        infinite: true,
        minimum: 1,
        mining_time: 14.25,
        name: 'se-core-fragment-omni',
        products: [
            {
                amount: 1,
                name: 'se-core-fragment-omni',
                type: 'item',
            },
        ],
        resource_category: 'se-core-mining',
    },
    'se-core-fragment-omni-sealed': {
        infinite: true,
        minimum: 1,
        mining_time: 14.25,
        name: 'se-core-fragment-omni-sealed',
        products: [
            {
                amount: 1,
                name: 'se-core-fragment-omni',
                type: 'item',
            },
        ],
        resource_category: 'se-core-mining',
    },
    'se-core-fragment-rare-metals': {
        infinite: true,
        minimum: 1,
        mining_time: 28.5,
        name: 'se-core-fragment-rare-metals',
        products: [
            {
                amount: 1,
                name: 'se-core-fragment-rare-metals',
                type: 'item',
            },
        ],
        resource_category: 'se-core-mining',
    },
    'se-core-fragment-rare-metals-sealed': {
        infinite: true,
        minimum: 1,
        mining_time: 28.5,
        name: 'se-core-fragment-rare-metals-sealed',
        products: [
            {
                amount: 1,
                name: 'se-core-fragment-rare-metals',
                type: 'item',
            },
        ],
        resource_category: 'se-core-mining',
    },
    'se-core-fragment-salt': {
        infinite: true,
        minimum: 1,
        mining_time: 10.6875,
        name: 'se-core-fragment-salt',
        products: [
            {
                amount: 1,
                name: 'se-core-fragment-salt',
                type: 'item',
            },
        ],
        resource_category: 'se-core-mining',
    },
    'se-core-fragment-salt-sealed': {
        infinite: true,
        minimum: 1,
        mining_time: 10.6875,
        name: 'se-core-fragment-salt-sealed',
        products: [
            {
                amount: 1,
                name: 'se-core-fragment-salt',
                type: 'item',
            },
        ],
        resource_category: 'se-core-mining',
    },
    'se-core-fragment-se-beryllium-ore': {
        infinite: true,
        minimum: 1,
        mining_time: 35.625,
        name: 'se-core-fragment-se-beryllium-ore',
        products: [
            {
                amount: 1,
                name: 'se-core-fragment-se-beryllium-ore',
                type: 'item',
            },
        ],
        resource_category: 'se-core-mining',
    },
    'se-core-fragment-se-beryllium-ore-sealed': {
        infinite: true,
        minimum: 1,
        mining_time: 35.625,
        name: 'se-core-fragment-se-beryllium-ore-sealed',
        products: [
            {
                amount: 1,
                name: 'se-core-fragment-se-beryllium-ore',
                type: 'item',
            },
        ],
        resource_category: 'se-core-mining',
    },
    'se-core-fragment-se-cryonite': {
        infinite: true,
        minimum: 1,
        mining_time: 21.375,
        name: 'se-core-fragment-se-cryonite',
        products: [
            {
                amount: 1,
                name: 'se-core-fragment-se-cryonite',
                type: 'item',
            },
        ],
        resource_category: 'se-core-mining',
    },
    'se-core-fragment-se-cryonite-sealed': {
        infinite: true,
        minimum: 1,
        mining_time: 21.375,
        name: 'se-core-fragment-se-cryonite-sealed',
        products: [
            {
                amount: 1,
                name: 'se-core-fragment-se-cryonite',
                type: 'item',
            },
        ],
        resource_category: 'se-core-mining',
    },
    'se-core-fragment-se-holmium-ore': {
        infinite: true,
        minimum: 1,
        mining_time: 28.5,
        name: 'se-core-fragment-se-holmium-ore',
        products: [
            {
                amount: 1,
                name: 'se-core-fragment-se-holmium-ore',
                type: 'item',
            },
        ],
        resource_category: 'se-core-mining',
    },
    'se-core-fragment-se-holmium-ore-sealed': {
        infinite: true,
        minimum: 1,
        mining_time: 28.5,
        name: 'se-core-fragment-se-holmium-ore-sealed',
        products: [
            {
                amount: 1,
                name: 'se-core-fragment-se-holmium-ore',
                type: 'item',
            },
        ],
        resource_category: 'se-core-mining',
    },
    'se-core-fragment-se-iridium-ore': {
        infinite: true,
        minimum: 1,
        mining_time: 42.75,
        name: 'se-core-fragment-se-iridium-ore',
        products: [
            {
                amount: 1,
                name: 'se-core-fragment-se-iridium-ore',
                type: 'item',
            },
        ],
        resource_category: 'se-core-mining',
    },
    'se-core-fragment-se-iridium-ore-sealed': {
        infinite: true,
        minimum: 1,
        mining_time: 42.75,
        name: 'se-core-fragment-se-iridium-ore-sealed',
        products: [
            {
                amount: 1,
                name: 'se-core-fragment-se-iridium-ore',
                type: 'item',
            },
        ],
        resource_category: 'se-core-mining',
    },
    'se-core-fragment-se-vitamelange': {
        infinite: true,
        minimum: 1,
        mining_time: 14.25,
        name: 'se-core-fragment-se-vitamelange',
        products: [
            {
                amount: 1,
                name: 'se-core-fragment-se-vitamelange',
                type: 'item',
            },
        ],
        resource_category: 'se-core-mining',
    },
    'se-core-fragment-se-vitamelange-sealed': {
        infinite: true,
        minimum: 1,
        mining_time: 14.25,
        name: 'se-core-fragment-se-vitamelange-sealed',
        products: [
            {
                amount: 1,
                name: 'se-core-fragment-se-vitamelange',
                type: 'item',
            },
        ],
        resource_category: 'se-core-mining',
    },
    'se-core-fragment-se-vulcanite': {
        infinite: true,
        minimum: 1,
        mining_time: 21.375,
        name: 'se-core-fragment-se-vulcanite',
        products: [
            {
                amount: 1,
                name: 'se-core-fragment-se-vulcanite',
                type: 'item',
            },
        ],
        resource_category: 'se-core-mining',
    },
    'se-core-fragment-se-vulcanite-sealed': {
        infinite: true,
        minimum: 1,
        mining_time: 21.375,
        name: 'se-core-fragment-se-vulcanite-sealed',
        products: [
            {
                amount: 1,
                name: 'se-core-fragment-se-vulcanite',
                type: 'item',
            },
        ],
        resource_category: 'se-core-mining',
    },
    'se-core-fragment-stone': {
        infinite: true,
        minimum: 1,
        mining_time: 14.25,
        name: 'se-core-fragment-stone',
        products: [
            {
                amount: 1,
                name: 'se-core-fragment-stone',
                type: 'item',
            },
        ],
        resource_category: 'se-core-mining',
    },
    'se-core-fragment-stone-sealed': {
        infinite: true,
        minimum: 1,
        mining_time: 14.25,
        name: 'se-core-fragment-stone-sealed',
        products: [
            {
                amount: 1,
                name: 'se-core-fragment-stone',
                type: 'item',
            },
        ],
        resource_category: 'se-core-mining',
    },
    'se-core-fragment-sulfur-ore': {
        infinite: true,
        minimum: 1,
        mining_time: 14.25,
        name: 'se-core-fragment-sulfur-ore',
        products: [
            {
                amount: 1,
                name: 'se-core-fragment-sulfur-ore',
                type: 'item',
            },
        ],
        resource_category: 'se-core-mining',
    },
    'se-core-fragment-sulfur-ore-sealed': {
        infinite: true,
        minimum: 1,
        mining_time: 14.25,
        name: 'se-core-fragment-sulfur-ore-sealed',
        products: [
            {
                amount: 1,
                name: 'se-core-fragment-sulfur-ore',
                type: 'item',
            },
        ],
        resource_category: 'se-core-mining',
    },
    'se-core-fragment-tin-ore': {
        infinite: true,
        minimum: 1,
        mining_time: 14.25,
        name: 'se-core-fragment-tin-ore',
        products: [
            {
                amount: 1,
                name: 'se-core-fragment-tin-ore',
                type: 'item',
            },
        ],
        resource_category: 'se-core-mining',
    },
    'se-core-fragment-tin-ore-sealed': {
        infinite: true,
        minimum: 1,
        mining_time: 14.25,
        name: 'se-core-fragment-tin-ore-sealed',
        products: [
            {
                amount: 1,
                name: 'se-core-fragment-tin-ore',
                type: 'item',
            },
        ],
        resource_category: 'se-core-mining',
    },
    'se-core-fragment-titanium-ore': {
        infinite: true,
        minimum: 1,
        mining_time: 21.375,
        name: 'se-core-fragment-titanium-ore',
        products: [
            {
                amount: 1,
                name: 'se-core-fragment-titanium-ore',
                type: 'item',
            },
        ],
        resource_category: 'se-core-mining',
    },
    'se-core-fragment-titanium-ore-sealed': {
        infinite: true,
        minimum: 1,
        mining_time: 21.375,
        name: 'se-core-fragment-titanium-ore-sealed',
        products: [
            {
                amount: 1,
                name: 'se-core-fragment-titanium-ore',
                type: 'item',
            },
        ],
        resource_category: 'se-core-mining',
    },
    'se-core-fragment-tungsten-ore': {
        infinite: true,
        minimum: 1,
        mining_time: 21.375,
        name: 'se-core-fragment-tungsten-ore',
        products: [
            {
                amount: 1,
                name: 'se-core-fragment-tungsten-ore',
                type: 'item',
            },
        ],
        resource_category: 'se-core-mining',
    },
    'se-core-fragment-tungsten-ore-sealed': {
        infinite: true,
        minimum: 1,
        mining_time: 21.375,
        name: 'se-core-fragment-tungsten-ore-sealed',
        products: [
            {
                amount: 1,
                name: 'se-core-fragment-tungsten-ore',
                type: 'item',
            },
        ],
        resource_category: 'se-core-mining',
    },
    'se-core-fragment-uranium-ore': {
        infinite: true,
        minimum: 1,
        mining_time: 21.375,
        name: 'se-core-fragment-uranium-ore',
        products: [
            {
                amount: 1,
                name: 'se-core-fragment-uranium-ore',
                type: 'item',
            },
        ],
        resource_category: 'se-core-mining',
    },
    'se-core-fragment-uranium-ore-sealed': {
        infinite: true,
        minimum: 1,
        mining_time: 21.375,
        name: 'se-core-fragment-uranium-ore-sealed',
        products: [
            {
                amount: 1,
                name: 'se-core-fragment-uranium-ore',
                type: 'item',
            },
        ],
        resource_category: 'se-core-mining',
    },
    'se-core-fragment-zinc-ore': {
        infinite: true,
        minimum: 1,
        mining_time: 14.25,
        name: 'se-core-fragment-zinc-ore',
        products: [
            {
                amount: 1,
                name: 'se-core-fragment-zinc-ore',
                type: 'item',
            },
        ],
        resource_category: 'se-core-mining',
    },
    'se-core-fragment-zinc-ore-sealed': {
        infinite: true,
        minimum: 1,
        mining_time: 14.25,
        name: 'se-core-fragment-zinc-ore-sealed',
        products: [
            {
                amount: 1,
                name: 'se-core-fragment-zinc-ore',
                type: 'item',
            },
        ],
        resource_category: 'se-core-mining',
    },
    'se-core-fragment-zircon': {
        infinite: true,
        minimum: 1,
        mining_time: 17.8125,
        name: 'se-core-fragment-zircon',
        products: [
            {
                amount: 1,
                name: 'se-core-fragment-zircon',
                type: 'item',
            },
        ],
        resource_category: 'se-core-mining',
    },
    'se-core-fragment-zircon-sealed': {
        infinite: true,
        minimum: 1,
        mining_time: 17.8125,
        name: 'se-core-fragment-zircon-sealed',
        products: [
            {
                amount: 1,
                name: 'se-core-fragment-zircon',
                type: 'item',
            },
        ],
        resource_category: 'se-core-mining',
    },
    'se-cryonite': {
        infinite: false,
        minimum: 0,
        mining_time: 2,
        name: 'se-cryonite',
        products: [
            {
                amount: 1,
                name: 'se-cryonite',
                type: 'item',
            },
        ],
        resource_category: 'basic-solid',
    },
    'se-holmium-ore': {
        infinite: false,
        minimum: 0,
        mining_time: 3,
        name: 'se-holmium-ore',
        products: [
            {
                amount: 1,
                name: 'se-holmium-ore',
                type: 'item',
            },
        ],
        resource_category: 'basic-solid',
    },
    'se-iridium-ore': {
        infinite: false,
        minimum: 0,
        mining_time: 5,
        name: 'se-iridium-ore',
        products: [
            {
                amount: 1,
                name: 'se-iridium-ore',
                type: 'item',
            },
        ],
        required_fluid: {
            amount: 1,
            name: 'sulfuric-acid',
            type: 'fluid',
        },
        resource_category: 'hard-resource',
    },
    'se-methane-ice': {
        infinite: false,
        minimum: 0,
        mining_time: 1,
        name: 'se-methane-ice',
        products: [
            {
                amount: 1,
                name: 'se-methane-ice',
                type: 'item',
            },
        ],
        resource_category: 'basic-solid',
    },
    'se-naquium-ore': {
        infinite: false,
        minimum: 0,
        mining_time: 10,
        name: 'se-naquium-ore',
        products: [
            {
                amount: 1,
                name: 'se-naquium-ore',
                type: 'item',
            },
        ],
        required_fluid: {
            amount: 20,
            name: 'sulfuric-acid',
            type: 'fluid',
        },
        resource_category: 'hard-resource',
    },
    'se-vitamelange': {
        infinite: false,
        minimum: 0,
        mining_time: 1,
        name: 'se-vitamelange',
        products: [
            {
                amount: 1,
                name: 'se-vitamelange',
                type: 'item',
            },
        ],
        resource_category: 'basic-solid',
    },
    'se-vulcanite': {
        infinite: false,
        minimum: 0,
        mining_time: 2,
        name: 'se-vulcanite',
        products: [
            {
                amount: 1,
                name: 'se-vulcanite',
                type: 'item',
            },
        ],
        resource_category: 'basic-solid',
    },
    'se-water-ice': {
        infinite: false,
        minimum: 0,
        mining_time: 1,
        name: 'se-water-ice',
        products: [
            {
                amount: 1,
                name: 'se-water-ice',
                type: 'item',
            },
        ],
        resource_category: 'basic-solid',
    },
    stone: {
        infinite: false,
        minimum: 0,
        mining_time: 1,
        name: 'stone',
        products: [
            {
                amount: 1,
                name: 'stone',
                type: 'item',
            },
        ],
        resource_category: 'basic-solid',
    },
    'sulfur-ore': {
        infinite: false,
        minimum: 0,
        mining_time: 1,
        name: 'sulfur-ore',
        products: [
            {
                amount: 1,
                name: 'sulfur',
                type: 'item',
            },
        ],
        resource_category: 'basic-solid',
    },
    'tin-ore': {
        infinite: false,
        minimum: 0,
        mining_time: 1,
        name: 'tin-ore',
        products: [
            {
                amount: 1,
                name: 'tin-ore',
                type: 'item',
            },
        ],
        resource_category: 'basic-solid',
    },
    'titanium-ore': {
        infinite: false,
        minimum: 0,
        mining_time: 2,
        name: 'titanium-ore',
        products: [
            {
                amount: 1,
                name: 'titanium-ore',
                type: 'item',
            },
        ],
        required_fluid: {
            amount: 3,
            name: 'lubricant',
            type: 'fluid',
        },
        resource_category: 'basic-solid',
    },
    'tungsten-ore': {
        infinite: false,
        minimum: 0,
        mining_time: 2,
        name: 'tungsten-ore',
        products: [
            {
                amount: 1,
                name: 'tungsten-ore',
                type: 'item',
            },
        ],
        required_fluid: {
            amount: 1,
            name: 'mineral-water',
            type: 'fluid',
        },
        resource_category: 'basic-solid',
    },
    'uranium-ore': {
        infinite: false,
        minimum: 0,
        mining_time: 2,
        name: 'uranium-ore',
        products: [
            {
                amount: 1,
                name: 'uranium-ore',
                type: 'item',
            },
        ],
        required_fluid: {
            amount: 10,
            name: 'sulfuric-acid',
            type: 'fluid',
        },
        resource_category: 'basic-solid',
    },
    'zinc-ore': {
        infinite: false,
        minimum: 0,
        mining_time: 1,
        name: 'zinc-ore',
        products: [
            {
                amount: 1,
                name: 'zinc-ore',
                type: 'item',
            },
        ],
        resource_category: 'basic-solid',
    },
    zircon: {
        infinite: false,
        minimum: 0,
        mining_time: 1.5,
        name: 'zircon',
        products: [
            {
                amount: 1,
                name: 'zircon',
                type: 'item',
            },
        ],
        resource_category: 'basic-solid',
    },
};
