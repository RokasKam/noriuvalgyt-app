import {SafeAreaView, View} from 'react-native';
import React, {useState} from 'react';
import styles from './HomeScreen.style';
import BlurryBackround from '../../components/blurryBackround/BlurryBackround';
import {useRecipeContext} from '../../contexts/RecipesContext';
import {useFetchRecipes} from '../../hooks/useFetchRecipes';
import Recipes from '../../components/recipes/Recipes';
import Filters from '../../components/filters/Filters';
import SearchInput from '../../components/searchInput/SearchInput';
import SearchSuggestions from '../../components/searchSuggestions/SearchSuggestions';
import {useFetchSuggestions} from '../../hooks/useFetchSuggestions';

const HomeScreen = () => {
  const {recipes, isLoading} = useRecipeContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [apliedSearchTerm, setApliedSearchTerm] = useState();
  const [isSearchAplied, setIsSearchAplied] = useState(false);

  const changeCurrentPage = () => setCurrentPage(state => state + 1);

  const currentFilterChanger = chosenFilter => {
    setSelectedCategory(chosenFilter);
    setCurrentPage(1);
  };

  const handleSearch = (searchText, isSearchNeeded) => {
    setSearchTerm(searchText);
    if (searchText === null) {
      setSearchTerm('');
    }
    setApliedSearchTerm(searchText);
    setIsSearchAplied(isSearchNeeded);
    setCurrentPage(1);
  };

  const handleSearchTermChange = text => {
    setSearchTerm(text);
    if (text.length === 0) {
      setIsSearchAplied(false);
      setApliedSearchTerm(null);
      setCurrentPage(1);
    }
  };

  useFetchSuggestions(searchTerm, isSearchAplied, setSearchSuggestions);
  useFetchRecipes(selectedCategory, currentPage, apliedSearchTerm);

  return (
    <BlurryBackround>
      <SafeAreaView style={styles.page}>
        <View style={styles.searchBlock}>
          <SearchInput
            searchTerm={searchTerm}
            setSearchTerm={handleSearchTermChange}
            isSearchAplied={isSearchAplied}
            handleSearch={handleSearch}
          />
          {searchTerm.length >= 3 && !isSearchAplied && (
            <SearchSuggestions
              handleSearch={handleSearch}
              searchSuggestions={searchSuggestions}
            />
          )}
          <Filters
            selectedCategory={selectedCategory}
            currentFilterChanger={currentFilterChanger}
          />
        </View>
        <Recipes
          recipes={recipes}
          changeCurrentPage={changeCurrentPage}
          isUserPage={false}
          isLoading={isLoading}
        />
      </SafeAreaView>
    </BlurryBackround>
  );
};

export default HomeScreen;
