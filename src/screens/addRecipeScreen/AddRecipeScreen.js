import {View, Text, SafeAreaView, Alert} from 'react-native';
import React, {useState} from 'react';
import InputToWriteRange from '../../components/inputToWriteRange/InputToWriteRange';
import DropDownPicker from 'react-native-dropdown-picker';
import {styling} from './AddRecipeScreen.style';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import recipesCategories from '../../constants/recipesCategories';
import BlurryBackround from '../../components/blurryBackround/BlurryBackround';
import Button from '../../components/button/Button';
import withLoading from '../../HOCs/withLoading';
import {apiService} from '../../serivces/business/apiService';
import DismissKeyboard from '../../components/dismissKeyborad/DismissKeyboard';
import InputRed from '../../components/inputRed/InputRed';
import AddPhoto from './AddPhoto';
import {
  cameraPhotoUploader,
  imageLibraryPhotoUploader,
} from '../../serivces/generic/photoUploader';

const AddRecipeScreen = ({setLoading}) => {
  const [openCategoryDropDown, setOpenCategoryDropdown] = useState(false);
  const [category, setCategory] = useState('All');
  const styles = styling(openCategoryDropDown);
  const [pickedPhotoUri, setPickedPhotoUri] = useState('');
  const [visiblePhotoPicker, setVisiblePhotoPicker] = useState(false);
  const [recipe, setRecipe] = useState({
    name: '',
    type: 'All',
    description: '',
    timeFrom: 0,
    timeTo: 0,
    price: 0,
    calories: 0,
  });

  const handleUpload = async () => {
    try {
      setLoading(true);
      await apiService.uploadNewRecipe(recipe);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      const errors = error.response.data.errors;
      if (errors) {
        Alert.alert(errors[Object.keys(errors)[0]][0]);
      } else {
        Alert.alert(error.response.data.Message);
      }
    }
  };

  return (
    <BlurryBackround>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.page}
        keyboardShouldPersistTaps="always">
        <DismissKeyboard>
          <SafeAreaView style={styles.section}>
            <InputRed
              caption={'Add a new recipe'}
              placeHolder={"Recipe's name"}
              value={recipe.name}
              setInput={text => setRecipe({...recipe, name: text})}
              multiline={false}
            />
            <InputRed
              caption={'Add Description'}
              placeHolder={"Recipe's description"}
              value={recipe.description}
              setInput={text => setRecipe({...recipe, description: text})}
              multiline={true}
            />
            <InputRed
              caption={'How much cost to make it?'}
              placeHolder={"Recipe's price"}
              value={recipe.price}
              setInput={text => setRecipe({...recipe, price: text})}
              multiline={false}
            />
            <InputRed
              caption={'How much calories does it have?'}
              placeHolder={"Recipe's calories"}
              value={recipe.calories}
              setInput={text => setRecipe({...recipe, calories: text})}
              multiline={false}
            />
            <View style={styles.dropDownBlock}>
              <Text style={styles.dropDownTitle}>Choose a category</Text>
              <DropDownPicker
                maxHeight={160}
                style={styles.dropDown}
                textStyle={styles.dropDownText}
                containerStyle={styles.dropDownContainer}
                dropDownContainerStyle={styles.dropDownList}
                open={openCategoryDropDown}
                value={category}
                items={recipesCategories}
                setOpen={setOpenCategoryDropdown}
                setValue={setCategory}
                onSelectItem={item => setRecipe({...recipe, type: item.value})}
                listMode={'SCROLLVIEW'}
              />
            </View>
            <InputToWriteRange
              upText="How long does it took to make it?"
              inputInfoFrom={recipe.timeFrom}
              inputInfoTo={recipe.timeTo}
              setInputInfoFrom={text => setRecipe({...recipe, timeFrom: text})}
              setInputInfoTo={text => setRecipe({...recipe, timeTo: text})}
            />
            <View style={styles.button}>
              <Button
                buttonText="Choose a picture"
                onClickAction={() => setVisiblePhotoPicker(true)}
              />
            </View>
            <View style={styles.button}>
              <Button
                buttonText="Add the recipe"
                onClickAction={handleUpload}
              />
            </View>
            <AddPhoto
              isVisible={visiblePhotoPicker}
              onClose={() => setVisiblePhotoPicker(false)}
              onImageLibraryPress={() =>
                imageLibraryPhotoUploader(setPickedPhotoUri, base64 =>
                  setRecipe({...recipe, photoBase64: base64}),
                )
              }
              onCameraPress={() =>
                cameraPhotoUploader(setPickedPhotoUri, base64 =>
                  setRecipe({...recipe, photoBase64: base64}),
                )
              }
              uri={pickedPhotoUri}
            />
          </SafeAreaView>
        </DismissKeyboard>
      </KeyboardAwareScrollView>
    </BlurryBackround>
  );
};

export default withLoading('Adding a new recipe...')(AddRecipeScreen);
