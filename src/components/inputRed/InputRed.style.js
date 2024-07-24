import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export default StyleSheet.create({
  title: {
    color: COLORS.BLACK,
    marginVertical: 8,
    fontSize: 18,
  },
  input: {
    flexDirection: 'row',
    backgroundColor: COLORS.WHITE,
    borderWidth: 1,
    borderColor: COLORS.MAIN_RED,
    borderRadius: 8,
  },
  textInput: {
    marginTop: 8,
    flex: 1,
    color: COLORS.DIMGREY,
    lineHeight: 18,
    marginHorizontal: 16,
  },
});
