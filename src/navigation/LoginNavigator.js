import React from 'react';
import LoginScreen from '../screens/loginScreen/LoginScreen';
import RegisterScreen from '../screens/registerScreen/RegisterScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {platform} from '../serivces/generic/platform';
import {UserContext} from '../contexts/UserContext';
import {COLORS} from '../constants/colors';
import MainNavigator from './MainNavigator';
const Stack = createNativeStackNavigator();

const LoginNavigator = () => {
  return (
    <UserContext>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Login"
            component={LoginScreen}
          />
          <Stack.Screen
            options={{
              headerShown: false,
              headerLeft: null,
              gestureEnabled: false,
            }}
            name="HomeNavigator"
            component={MainNavigator}
          />
          <Stack.Screen
            options={{
              headerShown: platform.isIos(),
              headerTransparent: true,
              title: '',
              headerTintColor: COLORS.MAIN_RED,
            }}
            name="Register"
            component={RegisterScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext>
  );
};

export default LoginNavigator;
