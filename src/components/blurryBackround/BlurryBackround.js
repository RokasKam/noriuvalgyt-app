import {ImageBackground} from 'react-native';
import React from 'react';
import styles from './BlurryBackround.styles';

const BlurryBackround = ({children}) => {
  return (
    <ImageBackground
      source={require('../../assets/img/NoriuValgytBackground2.jpg')}
      resizeMode="cover"
      style={styles.image}>
      {children}
    </ImageBackground>
  );
};

export default BlurryBackround;
