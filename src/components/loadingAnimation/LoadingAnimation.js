import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import styles from './LoadingAnimation.style';
import {COLORS} from '../../constants/colors';

const LoadingAnimation = ({loadingText}) => {
  return (
    <View style={styles.indicatorWrapper}>
      <ActivityIndicator size="large" color={COLORS.MAIN_RED} />
      <Text style={styles.indicatorText}>{loadingText}</Text>
    </View>
  );
};

export default LoadingAnimation;
