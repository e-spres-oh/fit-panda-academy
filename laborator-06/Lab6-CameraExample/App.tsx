import { StyleSheet, View } from 'react-native';
import CameraExample from './src/components/CameraExample';

export default function App() {
  return (
    <View style={styles.container}>
      <CameraExample/>
      {/* <ImagePickerExample/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
