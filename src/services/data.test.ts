import {InMemoryDBWrapper} from './data';

test('Indexed correctly', () => {
    const db = new InMemoryDBWrapper();

    expect(db.ingredientIndex['iron-plate']).toEqual([]);
    expect(db.productIndex['iron-plate']).toEqual([]);
});
