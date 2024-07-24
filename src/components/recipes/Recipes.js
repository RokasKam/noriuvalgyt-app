import {View, FlatList, Image, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import BottomContainer from '../bottomContainer/BottomContainer';
import styles from './Recipes.style';
import {useNavigation} from '@react-navigation/native';

const Recipes = ({recipes, changeCurrentPage, isUserPage, isLoading}) => {
  const navigation = useNavigation();
  return (
    <FlatList
      style={styles.list}
      data={recipes}
      ListEmptyComponent={
        !isLoading && (
          <View style={styles.titleView}>
            <Text style={styles.title}>The list of recipes is empty</Text>
          </View>
        )
      }
      removeClippedSubviews={false}
      onEndReached={changeCurrentPage}
      onEndReachedThreshold={0.5}
      renderItem={({item}) => (
        <TouchableOpacity
          onPress={() => navigation.navigate('Details', {recipe: item})}>
          <Image
            source={{
              uri: `${item.photoURL}`,
            }}
            style={styles.sectionImage}
          />
          <View style={styles.bottomContainer}>
            <BottomContainer
              item={item}
              isUserList={isUserPage}
              isRatingDisabled={false}
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default Recipes;
