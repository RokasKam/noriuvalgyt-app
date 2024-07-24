import {useCallback, useEffect} from 'react';
import {apiService} from '../serivces/business/apiService';
import {Alert} from 'react-native';

export const useFetchSuggestions = (
  searchTerm,
  isSearchAplied,
  setSearchSuggestions,
) => {
  const getSuggestions = useCallback(async () => {
    try {
      const params = {SearchPhrase: searchTerm};
      const response = await apiService.fetchSuggestions(params);
      setSearchSuggestions(response.data);
    } catch (error) {
      const errors = error.response.data.errors;
      console.log(error.response.data);
      if (errors) {
        Alert.alert(errors[Object.keys(errors)[0]][0]);
      } else {
        Alert.alert(error.response.data.Message);
      }
    }
  }, [searchTerm, setSearchSuggestions]);

  useEffect(() => {
    if (!isSearchAplied && searchTerm.length >= 3) {
      getSuggestions();
    }
  }, [getSuggestions, isSearchAplied, searchTerm]);
};
