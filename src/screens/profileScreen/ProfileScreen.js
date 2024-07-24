import {View, Text, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import BlurryBackround from '../../components/blurryBackround/BlurryBackround';
import Button from '../../components/button/Button';
import Recipes from '../../components/recipes/Recipes';
import {useUserRecipesContext} from '../../contexts/UserRecipesContext';
import {useUserContext} from '../../contexts/UserContext';
import styles from './ProfileScreen.style';
import {useFetchUserRecipes} from '../../hooks/useFetchUserRecipes';
import {useReload} from '../../hooks/useReload';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const {userRecipes, setUserRecipes, isLoading} = useUserRecipesContext();
  const {user, setUser} = useUserContext();
  const isFocused = useIsFocused();
  const [currentPage, setCurrentPage] = useState(1);

  useReload(navigation, setCurrentPage);
  useFetchUserRecipes(currentPage, user.token, isFocused);

  const changeCurrentPage = () => setCurrentPage(currentPage + 1);

  const handleLogOut = () => {
    setUser(null);
    setUserRecipes([]);
    navigation.navigate('Login');
  };

  return (
    <BlurryBackround>
      <SafeAreaView style={styles.page}>
        <View style={styles.infoBlock}>
          <View style={styles.accountInfo}>
            <Text style={styles.textStyle}>{user.username}</Text>
            <Text style={styles.greyText}>{user.email}</Text>
          </View>
          <View style={styles.logOutButton}>
            <Button buttonText={'Log out'} onClickAction={handleLogOut} />
          </View>
        </View>
        <View style={styles.nameFavourite}>
          <Text style={styles.bigGreyText}> Liked recipes</Text>
        </View>
        <Recipes
          recipes={userRecipes}
          changeCurrentPage={changeCurrentPage}
          isUserPage={true}
          isLoading={isLoading}
        />
      </SafeAreaView>
    </BlurryBackround>
  );
};

export default ProfileScreen;
