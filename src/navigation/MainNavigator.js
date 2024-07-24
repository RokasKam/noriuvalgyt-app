import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AddRecipeScreen from '../screens/addRecipeScreen/AddRecipeScreen';
import ProfileScreen from '../screens/profileScreen/ProfileScreen';
import {COLORS} from '../constants/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {RecipesContext} from '../contexts/RecipesContext';
import HomeNavigator from './HomeNavigator';
import {UserRecipesContext} from '../contexts/UserRecipesContext';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <UserRecipesContext>
      <RecipesContext>
        <Tab.Navigator
          initialRouteName={'Home'}
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: COLORS.MAIN_COLOR,
            tabBarInactiveTintColor: COLORS.GREY,
            tabBarLabelStyle: {paddingBottom: 5, fontSize: 10},
          }}>
          <Tab.Screen
            name={'Profile'}
            component={ProfileScreen}
            options={{
              tabBarIcon: ({color, size}) => (
                <Icon name="user" size={size} color={color} />
              ),
              tabBarLabel: 'Profile',
            }}
          />
          <Tab.Screen
            name={'Home'}
            component={HomeNavigator}
            options={{
              tabBarIcon: ({color, size}) => (
                <Icon name="home" size={size} color={color} />
              ),
              tabBarLabel: 'Home',
            }}
          />
          <Tab.Screen
            name={'AddRecipe'}
            component={AddRecipeScreen}
            options={{
              tabBarIcon: ({color, size}) => (
                <Icon name="plus" size={size} color={color} />
              ),
              tabBarLabel: 'Add a recipe',
            }}
          />
        </Tab.Navigator>
      </RecipesContext>
    </UserRecipesContext>
  );
};

export default MainNavigator;
