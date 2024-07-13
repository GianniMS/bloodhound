import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Camera from './components/Camera';
import { StatusProvider } from './components/Status'; // Import StatusProvider

export default function App() {
  return (
    <StatusProvider>
      <View style={styles.container}>
        <Camera />
        <StatusBar style="auto" />
      </View>
    </StatusProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
