import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/colors';
import styles from './InputRed.style';

const InputRed = ({caption, placeHolder, value, setInput, multiline}) => {
  return (
    <>
      <Text style={styles.title}>{caption}</Text>
      <View
        style={[
          styles.input,
          {
            height: multiline ? 168 : 56,
            justifyContent: multiline ? 'flex-start' : 'center',
            alignItems: multiline ? 'flex-start' : 'center',
          },
        ]}>
        <TextInput
          style={[
            styles.textInput,
            {
              marginTop: multiline ? 8 : 0,
            },
          ]}
          value={value}
          onChangeText={setInput}
          placeholder={placeHolder}
          placeholderTextColor={COLORS.DIMGREY}
          autoCapitalize="none"
          multiline={multiline}
        />
      </View>
    </>
  );
};

export default InputRed;
