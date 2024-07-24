import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import React from 'react';
import RecBackround from '../../components/recBackround/RecBackround';
import {COLORS} from '../../constants/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './RecipeDetails.style';

const RecipeDetails = ({route}) => {
  const recipe = route.params.recipe;
  return (
    <RecBackround>
      <SafeAreaView style={styles.page}>
        <View style={styles.topBlock}>
          <Image
            source={{
              uri: `${recipe.photoURL}`,
            }}
            style={styles.image}
          />
          <Text numberOfLines={1} adjustsFontSizeToFit style={styles.name}>
            {recipe.name}
          </Text>
          <Text style={styles.type}>{recipe.type}</Text>
          <Text style={styles.rating}>
            {recipe.rating.toFixed(2)}{' '}
            <Icon name="heart" color={COLORS.MAIN_RED} size={26} />
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowText}>{recipe.calories} Kcal</Text>
          <Text style={styles.rowText}>
            {recipe.durationFrom} - {recipe.durationTo} min
          </Text>
        </View>
        <ScrollView style={styles.scroll}>
          <Text adjustsFontSizeToFit style={styles.des}>
            {recipe.description}
          </Text>
        </ScrollView>
      </SafeAreaView>
    </RecBackround>
  );
};

export default RecipeDetails;
