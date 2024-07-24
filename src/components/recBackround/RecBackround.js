import {ImageBackground} from 'react-native';
import React from 'react';
import styles from './RecBackround.styles';

const RecBackround = ({children}) => {
  return (
    <ImageBackground
      source={require('../../assets/img/RecipePageBackground1.png')}
      resizeMode="cover"
      style={styles.image}>
      {children}
    </ImageBackground>
  );
};

export default RecBackround;
