import {useCallback, useEffect} from 'react';
import {apiService} from '../serivces/business/apiService';
import {createApiHeader} from '../serivces/business/createApiHeader';
import {useUserRecipesContext} from '../contexts/UserRecipesContext';

export const useFetchUserRecipes = (currentPage, token, isFocused) => {
  const {setUserRecipes, setIsLoading} = useUserRecipesContext();
  const getUserRecipes = useCallback(async () => {
    const params = {
      PageNumber: currentPage,
      PageSize: 2,
    };
    setIsLoading(true);
    const response = await apiService.fetchUserRecipes(
      params,
      createApiHeader(token),
    );
    setIsLoading(false);
    setUserRecipes(state => [...state, ...response.data]);
  }, [currentPage, setIsLoading, setUserRecipes, token]);

  useEffect(() => {
    if (isFocused) {
      getUserRecipes();
    }
  }, [isFocused, getUserRecipes]);
};
