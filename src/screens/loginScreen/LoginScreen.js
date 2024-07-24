import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/core';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import TransparentButton from '../../components/transparentButton/TransparentButton';
import BackroundWithLogo from '../../components/backroundWithLogo/BackroundWithLogo';
import {useUserContext} from '../../contexts/UserContext';
import {apiService} from '../../serivces/business/apiService';
import {createApiHeader} from '../../serivces/business/createApiHeader';
import {Alert} from 'react-native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [loginInfo, setLoginInfo] = useState({email: '', password: ''});
  const {setUser} = useUserContext();

  const login = async () => {
    try {
      const loginResponse = await apiService.login(loginInfo);
      try {
        const userResponse = await apiService.fetchUserInfo(
          createApiHeader(loginResponse.data.accessToken),
        );
        setUser({
          token: loginResponse.data.accessToken,
          id: userResponse.data.id,
          email: userResponse.data.email,
          username: userResponse.data.nickname,
        });
        navigation.navigate('HomeNavigator');
      } catch (error) {
        const errors = error.response.data.errors;
        console.log(error.response.data);
        if (errors) {
          Alert.alert(errors[Object.keys(errors)[0]][0]);
        } else {
          Alert.alert(error.response.data.Message);
        }
      }
    } catch (error) {
      const errors = error.response.data.errors;
      console.log(error.response.data);
      if (errors) {
        Alert.alert(errors[Object.keys(errors)[0]][0]);
      } else {
        Alert.alert(error.response.data.Message);
      }
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setLoginInfo({email: '', password: ''});
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <BackroundWithLogo>
      <Input
        placeHolder="Email"
        isSecureTextEntryNeeded={false}
        text={loginInfo.email}
        handleTextChange={text => setLoginInfo({...loginInfo, email: text})}
      />
      <Input
        placeHolder="Password"
        isSecureTextEntryNeeded={true}
        text={loginInfo.password}
        handleTextChange={text => setLoginInfo({...loginInfo, password: text})}
      />
      <Button buttonText="Login" onClickAction={login} />
      <TransparentButton
        buttonText="Don't have an account?"
        onClickAction={() => {
          navigation.navigate('Register');
        }}
      />
    </BackroundWithLogo>
  );
};

export default LoginScreen;
