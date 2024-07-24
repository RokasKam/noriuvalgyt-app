import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
export default StyleSheet.create({
  loginButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: '80%',
    borderRadius: 30,
    marginBottom: 12,
    backgroundColor: COLORS.MAIN_RED,
  },
  buttonText: {
    color: COLORS.WHITE,
  },
});
