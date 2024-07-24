import {useEffect} from 'react';
import {useUserRecipesContext} from '../contexts/UserRecipesContext';

export const useReload = (navigation, setCurrentPage) => {
  const {setUserRecipes, isReloadNeeded, setIsReloadNeeded} =
    useUserRecipesContext();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setUserRecipes([]);
      setCurrentPage(1);
    });
    return unsubscribe;
  }, [navigation, setCurrentPage, setUserRecipes]);

  useEffect(() => {
    if (isReloadNeeded) {
      setUserRecipes([]);
      setCurrentPage(1);
      setIsReloadNeeded(false);
    }
  }, [isReloadNeeded, setCurrentPage, setIsReloadNeeded, setUserRecipes]);
};
