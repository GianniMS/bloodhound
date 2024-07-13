import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import Ultimate from './Ultimate'; // Import the Ultimate component
import { useStatus } from './Status'; // Import useStatus hook

const Camera = () => {
  const [permission, requestPermission] = useCameraPermissions();
  const { isGrayscale, toggleGrayscale } = useStatus();

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

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={'back'} ratio="16:9" />
      {isGrayscale && <View style={styles.grayscaleOverlay} />}
      <View style={styles.buttonContainer}>
        <Ultimate onPress={toggleGrayscale} grayscaleMode={isGrayscale} />
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
});

export default Camera;
