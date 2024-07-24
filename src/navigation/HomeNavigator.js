import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {platform} from '../serivces/generic/platform';
import RecipeDetails from '../screens/recipeDetails/RecipeDetails';
import HomeScreen from '../screens/homeScreen/HomeScreen';
import {COLORS} from '../constants/colors';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        options={{headerShown: false}}
        name="Main"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{
          headerShown: platform.isIos(),
          headerTransparent: true,
          title: '',
          headerTintColor: COLORS.MAIN_RED,
        }}
        name="Details"
        component={RecipeDetails}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
