import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
export default StyleSheet.create({
  inputView: {
    width: '80%',
    height: 50,
    backgroundColor: COLORS.MAIN_COLOR_TRANS,
    borderRadius: 30,
    marginBottom: 12,
  },
  textInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    color: COLORS.MAIN_RED,
  },
});
