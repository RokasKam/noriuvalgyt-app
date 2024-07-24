import {Text, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import styles from './Filters.style';
import {COLORS} from '../../constants/colors';
import recipesCategories from '../../constants/recipesCategories';

const Filters = ({selectedCategory, currentFilterChanger}) => {
  return (
    <FlatList
      style={styles.container}
      horizontal={true}
      data={recipesCategories}
      renderItem={({item}) => (
        <TouchableOpacity
          style={[
            styles.item,
            {
              backgroundColor:
                item.label === selectedCategory
                  ? COLORS.MAIN_RED
                  : COLORS.WHITE,
              borderWidth: item.label === selectedCategory ? 0 : 0.5,
            },
          ]}
          onPress={() => currentFilterChanger(item.label)}>
          <Text
            style={[
              styles.title,
              {
                color:
                  item.label === selectedCategory
                    ? COLORS.WHITE
                    : COLORS.DIMGREY,
              },
            ]}>
            {item.label}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default Filters;
