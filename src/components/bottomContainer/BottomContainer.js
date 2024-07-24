import {View, Text, Alert} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {Rating} from 'react-native-ratings';
import styles from './BottomContainer.style';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../../constants/colors';
import {useRecipeContext} from '../../contexts/RecipesContext';
import {apiService} from '../../serivces/business/apiService';
import {useUserContext} from '../../contexts/UserContext';
import {useUserRecipesContext} from '../../contexts/UserRecipesContext';
import {createApiHeader} from '../../serivces/business/createApiHeader';

const BottomContainer = ({item, isUserList, isRatingDisabled}) => {
  const {updateARecipe} = useRecipeContext();
  const [userRating, setUserRating] = useState();
  const {updateAUserRecipe, setIsReloadNeeded} = useUserRecipesContext();
  const {user} = useUserContext();

  const handleUpdateRating = useCallback(
    async rating => {
      const updateRequest = {userRating: rating};
      try {
        const response = await apiService.updateRating(item.id, updateRequest);
        updateARecipe(response.data.id, response.data.rating);
        updateAUserRecipe(response.data.id, response.data.rating);
      } catch (error) {
        const errors = error.response.data.errors;
        if (errors) {
          Alert.alert(errors[Object.keys(errors)[0]][0]);
        } else {
          Alert.alert(error.response.data.Message);
        }
      }
    },
    [item.id, updateARecipe, updateAUserRecipe],
  );

  useEffect(() => {
    if (userRating) {
      handleUpdateRating(userRating);
      setUserRating(null);
    }
  }, [handleUpdateRating, userRating]);

  const handleAddLikedRecipe = async () => {
    const params = {recipeId: item.id};
    try {
      await apiService.addLikedRecipe(params, createApiHeader(user.token));
    } catch (error) {
      const errors = error.response.data.errors;
      if (errors) {
        Alert.alert(errors[Object.keys(errors)[0]][0]);
      } else {
        Alert.alert(error.response.data.Message);
      }
    }
  };

  const handleRemoveLikedRecipe = async () => {
    const params = {recipeId: item.id};
    try {
      await apiService.removeLikedRecipe(params, createApiHeader(user.token));
      setIsReloadNeeded(true);
    } catch (error) {
      const errors = error.response.data.errors;
      if (errors) {
        Alert.alert(errors[Object.keys(errors)[0]][0]);
      } else {
        Alert.alert(error.response.data.Message);
      }
    }
  };
  return (
    <View style={styles.bottomContainer}>
      <View style={styles.row}>
        <Text style={styles.textStyle} numberOfLines={1} adjustsFontSizeToFit>
          {item.name}
        </Text>
        {isUserList === false ? (
          <Icon
            name="heart"
            color={COLORS.MAIN_RED}
            size={20}
            style={styles.icon}
            onPress={handleAddLikedRecipe}
          />
        ) : (
          <Icon
            name="remove"
            color={COLORS.MAIN_RED}
            size={25}
            style={styles.icon}
            onPress={handleRemoveLikedRecipe}
          />
        )}
      </View>
      <View style={styles.row}>
        <View style={styles.ratingBlock}>
          <Rating
            readonly={isRatingDisabled}
            style={styles.rating}
            type="heart"
            ratingCount={5}
            imageSize={20}
            jumpValue={0.5}
            fractions={2}
            startingValue={item.rating}
            onFinishRating={rating => setUserRating(rating)}
          />
          <Text style={[styles.greyText, styles.rating]}>
            {item.rating.toFixed(2)} / 5.0 ({item.ratingAmount} ratings)
          </Text>
        </View>
        <Text style={styles.greyText}>{item.type}</Text>
      </View>
      <View style={styles.addionalInfoRow}>
        <Text style={styles.greyText}>
          {item.durationFrom} - {item.durationTo} duration
        </Text>
        <Text style={styles.greyText}>{item.cost} Eur</Text>
        <Text style={styles.greyText}>{item.calories} Kcal</Text>
      </View>
    </View>
  );
};

export default BottomContainer;
