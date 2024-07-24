import {KeyboardAvoidingView, ImageBackground, Image} from 'react-native';
import styles from './BackroundWithLogo.style';
import React from 'react';

const BackroundWithLogo = ({children}) => {
  return (
    <ImageBackground
      source={require('../../assets/img/NoriuValgytBackground.png')}
      resizeMode="cover"
      style={styles.image}>
      <KeyboardAvoidingView behavior="padding" style={styles.mainBlock}>
        <Image
          source={require('../../assets/img/NoriuValgytLogo.png')}
          style={styles.logo}
        />
        {children}
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default BackroundWithLogo;
