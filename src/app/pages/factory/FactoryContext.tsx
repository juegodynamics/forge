import React from 'react';
import {Recipe} from 'models';
import {DBWrapper, InMemoryDBWrapper} from 'services/data';

export interface FactoryContext {
    selectedRecipes: Recipe[];
    updateSelectedRecipes: (newSelectedRecipes: Recipe[]) => void;
}

export const defaultFactoryContext: FactoryContext = {
    selectedRecipes: [],
    updateSelectedRecipes: () => null,
};

export const FactoryContext = React.createContext(defaultFactoryContext);
