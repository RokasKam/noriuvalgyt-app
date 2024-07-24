import React, {createContext, useContext, useState} from 'react';

const RecipeContext = createContext();

export const useRecipeContext = () => {
  return useContext(RecipeContext);
};

export const RecipesContext = ({children}) => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const updateARecipe = (id, rating) => {
    setRecipes(state =>
      state.map(recipe =>
        recipe.id === id
          ? {...recipe, rating: rating, ratingAmount: recipe.ratingAmount + 1}
          : recipe,
      ),
    );
  };

  return (
    <RecipeContext.Provider
      value={{recipes, setRecipes, updateARecipe, isLoading, setIsLoading}}>
      {children}
    </RecipeContext.Provider>
  );
};
