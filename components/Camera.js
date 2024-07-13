import React from 'react';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';

const Camera = () => {
  const [permission, requestPermission] = useCameraPermissions();
  const [isGrayscale, setIsGrayscale] = useState(false);

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  const toggleGrayscale = () => {
    setIsGrayscale(!isGrayscale);
  };

  return (
    <View style={styles.container}>
    <CameraView style={styles.camera} facing={'back'} ratio="16:9"/>
    {isGrayscale && <View style={styles.grayscaleOverlay} />}
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={toggleGrayscale} style={styles.button}>
          <Text style={styles.text}>{isGrayscale ? 'Remove Grayscale' : 'Apply Grayscale'}</Text>
        </TouchableOpacity>
      </View>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  grayscaleOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(105, 105, 105, 0.5)',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});

export default Camera;