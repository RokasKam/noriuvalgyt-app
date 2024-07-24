import {useCallback, useEffect} from 'react';
import {useRecipeContext} from '../contexts/RecipesContext';
import {apiService} from '../serivces/business/apiService';
import {Alert} from 'react-native';
const RECIPES_PER_PAGE = 2;

export const useFetchRecipes = (
  selectedCategory,
  currentPage,
  apliedSearchTerm,
) => {
  const {setRecipes, setIsLoading} = useRecipeContext();
  useEffect(() => {
    setRecipes([]);
  }, [setRecipes, selectedCategory, apliedSearchTerm]);

  const getRecipes = useCallback(async () => {
    const params = {
      SearchPhrase: apliedSearchTerm,
      FilteringCategory: selectedCategory,
      PageNumber: currentPage,
      PageSize: RECIPES_PER_PAGE,
    };
    try {
      setIsLoading(true);
      const response = await apiService.fetchRecipes(params);
      setRecipes(state => [...state, ...response.data]);
      setIsLoading(false);
    } catch (error) {
      const errors = error.response.data.errors;
      console.log(error.response.data);
      if (errors) {
        Alert.alert(errors[Object.keys(errors)[0]][0]);
      } else {
        Alert.alert(error.response.data.Message);
      }
    }
  }, [
    apliedSearchTerm,
    currentPage,
    selectedCategory,
    setIsLoading,
    setRecipes,
  ]);

  useEffect(() => {
    getRecipes();
  }, [getRecipes]);
};
