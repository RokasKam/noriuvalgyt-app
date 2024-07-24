import React, {createContext, useContext, useState} from 'react';

const UserRecipesContextVar = createContext();

export const useUserRecipesContext = () => {
  return useContext(UserRecipesContextVar);
};
export const UserRecipesContext = ({children}) => {
  const [userRecipes, setUserRecipes] = useState([]);
  const [isReloadNeeded, setIsReloadNeeded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const updateAUserRecipe = (id, rating) => {
    setUserRecipes(state =>
      state.map(recipe =>
        recipe.id === id ? {...recipe, rating: rating} : recipe,
      ),
    );
  };
  return (
    <UserRecipesContextVar.Provider
      value={{
        userRecipes,
        setUserRecipes,
        updateAUserRecipe,
        isReloadNeeded,
        setIsReloadNeeded,
        isLoading,
        setIsLoading,
      }}>
      {children}
    </UserRecipesContextVar.Provider>
  );
};
