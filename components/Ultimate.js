import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useStatus } from './Status'; // Import useStatus hook

const Ultimate = ({ onPress, grayscaleMode }) => {
  const { isGrayscale } = useStatus();

  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Image
        source={require('../assets/ult.png')}
        style={[styles.imageButton, isGrayscale && styles.grayscaleImage]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
  },
  imageButton: {
    width: 100,
    height: 100,
  },
  grayscaleImage: {
    tintColor: 'red', // Change the tintColor to red when grayscale mode is active
  },
});

export default Ultimate;
