import React from 'react';
import { View, Text, StyleSheet, PanResponder, Animated } from 'react-native';

const SwipeableList = () => {
  // Sample data for the list
  const data = [
    { id: 1, title: 'Item 1' },
    { id: 2, title: 'Item 2' },
    { id: 3, title: 'Item 3' },
    // Add more items as needed
  ];

  return (
    <View style={styles.container}>
      {data.map((item) => (
        <SwipeableListItem key={item.id} title={item.title} />
      ))}
    </View>
  );
};

const SwipeableListItem = ({ title }) => {
  return (
    <View style={styles.listItemContainer}>
      <Text style={styles.listItemText}>{title}</Text>
      {/* Delete button */}
      <View style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>Delete</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  listItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  listItemText: {
    fontSize: 18,
    marginRight: 16,
  },
  deleteButton: {
    backgroundColor: 'red',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
  },
  deleteButtonText: {
    color: 'white',
  },
});

export default SwipeableList;
