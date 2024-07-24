import {Alert} from 'react-native';

export const errorChecker = async (functionToCheck, onError) => {
  try {
    await functionToCheck();
  } catch (error) {
    onError();
    const errors = error.response.data.errors;
    console.log(error.response.data);
    if (errors) {
      Alert.alert(errors[Object.keys(errors)[0]][0]);
    } else {
      Alert.alert(error.response.data.Message);
    }
  }
};
