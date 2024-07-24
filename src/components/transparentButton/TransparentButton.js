import {TouchableOpacity, Text} from 'react-native';
import React from 'react';
import styles from './TransparentButton.style';

const TransparentButton = ({buttonText, onClickAction}) => {
  return (
    <TouchableOpacity onPress={onClickAction}>
      <Text style={styles.registerText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default TransparentButton;
