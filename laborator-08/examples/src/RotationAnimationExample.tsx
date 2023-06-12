import React, { useEffect, useRef } from 'react';
import { Animated, View, Text, StyleSheet } from 'react-native';

// This code demonstrates a rotation animation using the Animated API in React Native. 
// The goal is to animate a box by continuously rotating it.

// First, we create an Animated.Value called rotationAnim and initialize it with a starting value of 0. 
// This value represents the rotation of the box we want to animate.

// Next, we use the useEffect hook to start the animation when the component mounts. Inside the effect, 
// we use the Animated.loop method to create a continuous loop for the animation. Within the loop, 
// we use the Animated.timing method to define the animation itself. 
// We specify that we want the rotationAnim value to go from 0 to 1, representing a full rotation. 
// The animation has a duration of 2000 milliseconds and is set to use the native driver for better 
// performance.

// The rotationAnim value is then interpolated using the interpolate method. 
// This allows us to map the animated value range (0 to 1) to the desired output range of rotations 
// (0deg to 360deg). The rotateInterpolate variable holds the interpolated value.

// In the render method, we have a View component that acts as a container. Inside it, 
// we have an Animated.View component. We set the transform property of this view to include 
// a rotation transformation using the rotateInterpolate value. This means that the box will 
// continuously rotate based on the animated value.

// The styling of the box and the text inside it is defined in the styles object.

// By using this code, you can achieve a rotation animation effect in React Native. 
// The box will continuously rotate in a loop, giving a dynamic and visually appealing animation. 

const RotationAnimationExample = () => {
  const rotationAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotationAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true, // Enable native driver for better performance
      })
    ).start();
  }, [rotationAnim]);

  const rotateInterpolate = rotationAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, { transform: [{ rotate: rotateInterpolate }] }]}>
        <Text style={styles.text}>Rotating Box</Text>
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

export default RotationAnimationExample;
