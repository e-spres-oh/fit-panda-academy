import React, { useRef } from 'react';
import { View, Text, StyleSheet, PanResponder, Animated, Touchable } from 'react-native';

// This code example demonstrates a swipeable list item component in React Native. 
// It allows the user to swipe the item to the left to reveal a delete button.

// Inside the component, we create a reference using the useRef hook to create a mutable value panX,
// which will represent the horizontal translation of the swipe gesture.

// We then create a panResponder using the PanResponder.create method. 
// It allows us to handle touch-based gestures such as dragging and swiping. 

// The panResponder is configured with three event handlers:
// onStartShouldSetPanResponder: This handler determines if the gesture should be recognized and captured.
//  In this case, we simply return true to allow the gesture.
// onPanResponderMove: This handler is called when the user moves their finger while swiping.
// We check if the horizontal displacement dx is less than 0 (swiping to the left), and if so,
// we update the panX value using panX.setValue(gestureState.dx). This updates the horizontal translation of the swipeableItem.
// onPanResponderRelease: This handler is called when the user releases their finger after swiping.
// We check the final dx value to determine if it crossed a threshold to trigger a delete action.
// If the threshold is not crossed (gestureState.dx > -70), we use Animated.spring to animate the panX value back to 0, 
// bringing the item back to its original position.

// Inside the return statement, we have a View component that serves as the container for the list item. It contains two child components:
// an Animated.View and a delete button.

// The Animated.View represents the swipeable item itself and has the animatedStyles applied to it. 
// The animatedStyles object uses the panX value to translate the item horizontally based on the swipe gesture.

// The panResponder.panHandlers spread onto the Animated.View pass the touch events to the pan responder, 
// enabling the swipe gesture.

// By using this code, you can create a swipeable list item in React Native that allows users to swipe to reveal a delete button. 


const SwipeableListItem = ({ title }) => {
  const panX = useRef(new Animated.Value(0)).current;

  const panResponder = PanResponder.create({
    
    onStartShouldSetPanResponder: () => true,

    onPanResponderMove: (_, gestureState) => {
      if(gestureState.dx<0)
      panX.setValue(gestureState.dx);
    },

    onPanResponderRelease: (_, gestureState) => {
      console.log(gestureState.dx)
      if(gestureState.dx<-70){}
      else{
      Animated.spring(panX, {
        toValue: 0,
        useNativeDriver: true,
      }).start();}
    },

  });

  const animatedStyles = {
    transform: [{ translateX: panX }],
  };

  return (
    <View style={styles.listItemContainer}>
      <Animated.View style={[styles.swipeableItem, animatedStyles]} {...panResponder.panHandlers}>
        <View style={styles.blueView}>
          <Text style={styles.listItemText}>{title}</Text>
        </View>
      </Animated.View>
      {/* Delete button */}
      <View style={styles.deleteButton}>
        <Text onPress={()=>{console.log('delete')}} style={styles.deleteButtonText}>Delete</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listItemContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 16,
    flex:1
  },
  swipeableItem: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    zIndex: 1,
  },
  blueView: {
    backgroundColor: 'blue',
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  listItemText: {
    fontSize: 18,
    color: 'white',
  },
  deleteButton: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    borderRadius: 4,
  },
  deleteButtonText: {
    color: 'white',
  },
});

export default SwipeableListItem;
