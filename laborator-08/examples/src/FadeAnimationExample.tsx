import React, { useEffect, useRef } from 'react';
import { Animated, View, Text, StyleSheet } from 'react-native';

// This code demonstrates a simple fade animation using the Animated API in React Native. 
// The goal is to animate the opacity of a box, making it fade in gradually.

// First, we create an Animated.Value called fadeAnim and initialize it with a starting value of 0. 
// This value represents the opacity of the box we want to animate.

// Next, we use the useEffect hook to start the animation when the component mounts. 
// Inside the effect, we use the Animated.timing method to define the animation. 
// We specify that we want the fadeAnim value to reach 1 (fully opaque) over a duration of 
// 1000 milliseconds. Additionally, we enable the native driver for better performance.

// When the animation is triggered by calling start(), React Native will automatically 
// interpolate the fadeAnim value between 0 and 1, smoothly transitioning the opacity over time.

// We have an Animated.View component. We set the opacity of this view using the fadeAnim value, 
// which is animated. As a result, the box will gradually fade in from invisible to fully visible.

// By using this code, you can achieve a simple fade-in animation effect in React Native. 

const FadeAnimationExample = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true, // Enable native driver for better performance
    }).start();
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, { opacity: fadeAnim }]}>
        <Text style={styles.text}>Fading Box</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});

export default FadeAnimationExample;
