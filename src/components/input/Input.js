import {TextInput, View} from 'react-native';
import React from 'react';
import styles from './Input.style';
import {COLORS} from '../../constants/colors';

const Input = ({
  placeHolder,
  isSecureTextEntryNeeded,
  text,
  handleTextChange,
}) => {
  return (
    <View style={styles.inputView}>
      <TextInput
        style={styles.textInput}
        value={text}
        onChangeText={handleTextChange}
        placeholder={placeHolder}
        placeholderTextColor={COLORS.MAIN_RED}
        autoCapitalize="none"
        selectionColor={COLORS.MAIN_RED}
        secureTextEntry={isSecureTextEntryNeeded}
      />
    </View>
  );
};
export default Input;
