import {Image, Pressable, SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import styles from './AddPhoto.style';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../../constants/colors';

const AddPhoto = ({
  isVisible,
  onClose,
  onImageLibraryPress,
  onCameraPress,
  uri,
}) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      style={styles.modal}>
      <SafeAreaView style={styles.modalView}>
        <Image
          source={uri ? {uri} : require('../../assets/img/choosePicture.png')}
          style={styles.sectionImage}
        />
        <View style={styles.buttons}>
          <Pressable style={styles.button} onPress={onImageLibraryPress}>
            <Icon
              style={styles.buttonIcon}
              name="image"
              color={COLORS.MAIN_COLOR}
              size={25}
            />
            <Text style={styles.buttonText}>Library</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={onCameraPress}>
            <Icon
              style={styles.buttonIcon}
              name="camera"
              color={COLORS.MAIN_COLOR}
              size={25}
            />
            <Text style={styles.buttonText}>Camera</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default AddPhoto;
