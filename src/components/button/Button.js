import {TouchableOpacity, Text} from 'react-native';
import React from 'react';
import styles from './Button.style';

const Button = ({buttonText, onClickAction}) => {
  return (
    <TouchableOpacity style={styles.loginButton} onPress={onClickAction}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default Button;
