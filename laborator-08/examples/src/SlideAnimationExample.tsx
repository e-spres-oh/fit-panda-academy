import React, { useEffect, useRef } from 'react';
import { Animated, View, StyleSheet } from 'react-native';

// This code demonstrates a slide animation using the Animated API in React Native. 
// The goal is to animate a box by sliding it into view from the top.

// First, we create an Animated.Value called slideAnim and initialize it with a starting value of -200. 
// This value represents the vertical translation of the box we want to animate. 
// By setting it to a negative value, the box starts offscreen, above its initial position.

// Next, we use the useEffect hook to start the animation when the component mounts. 
// Inside the effect, we use the Animated.timing method to define the animation. 
// We specify that we want the slideAnim value to transition from its initial value to 0, 
// which represents no translation. The animation has a duration of 1000 milliseconds and 
// is set to use the native driver for better performance.

// In the render method, we have a View component that acts as a container. 
// Inside it, we have an Animated.View component. We set the transform property of this view 
// to include a vertical translation transformation using the slideAnim value. This means that the 
// box will slide into view from the top based on the animated value.

// By using this code, you can achieve a slide animation effect in React Native. 
// The box will smoothly slide into view from the top. Feel free to modify the styling 
// and animation properties to suit your specific needs.

const SlideAnimationExample = () => {
  const slideAnim = useRef(new Animated.Value(-200)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true, // Enable native driver for better performance
    }).start();
  }, [slideAnim]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, { transform: [{ translateY: slideAnim }] }]}>
        {/* Content */}
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
  },
});

export default SlideAnimationExample;
