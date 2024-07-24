import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

export default StyleSheet.create({
  page: {
    alignSelf: 'center',
    width: '90%',
    height: '100%',
  },
  topBlock: {
    height: '60%',
  },
  image: {
    height: 203,
    borderWidth: 0,
    borderRadius: 8,
  },
  name: {
    marginTop: 8,
    alignSelf: 'center',
    fontSize: 30,
    fontWeight: '900',
    color: COLORS.MAIN_RED,
  },
  type: {
    marginTop: 8,
    alignSelf: 'center',
    fontWeight: '500',
    fontSize: 26,
    color: COLORS.MAIN_RED,
  },
  rating: {
    marginTop: 8,
    alignSelf: 'center',
    fontSize: 26,
    fontWeight: '900',
    color: COLORS.MAIN_RED,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  rowText: {
    fontWeight: '500',
    fontSize: 26,
    color: COLORS.MAIN_COLOR,
  },
  scroll: {
    marginVertical: 8,
    alignSelf: 'center',
  },
  des: {
    fontWeight: '500',
    fontSize: 20,
    color: COLORS.MAIN_COLOR,
    textAlign: 'justify',
  },
});
