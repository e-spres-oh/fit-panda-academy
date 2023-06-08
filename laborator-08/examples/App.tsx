import { StyleSheet, Text, View } from 'react-native';
import FadeAnimationExample from './src/FadeAnimationExample';
import SlideAnimationExample from './src/SlideAnimationExample';
import RotationAnimationExample from './src/RotationAnimationExample';

import React from 'react';
import SwipeableList from './src/SwipableList';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <FadeAnimationExample></FadeAnimationExample> */}
      {/* <SlideAnimationExample></SlideAnimationExample> */}
      {/* <RotationAnimationExample></RotationAnimationExample> */}
      <SwipeableList></SwipeableList>
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
