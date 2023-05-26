import React from "react";
import { FlatList, StyleSheet, ScrollView, Text, View } from "react-native";

const logo = {
  uri: "https://reactnative.dev/img/tiny_logo.png",
  width: 64,
  height: 64,
};

const dataToRender = [
  { key: "Devin" },
  { key: "Dan" },
  { key: "Dominic" },
  { key: "Jackson" },
  { key: "James" },
  { key: "Joel" },
  { key: "John" },
  { key: "Jillian" },
  { key: "Jimmy" },
  { key: "Julie" },
];

const App = () => (
  <View style={{ height: "100%" }}>
    <Text style={{ fontSize: 50, backgroundColor: "red" }}>Content Before</Text>
    {/* <ScrollView style={{ flex: 1 }}>
      {dataToRender.map((item) => {
        return (
          <Text key={item.key} style={styles.item}>
            {item.key}
          </Text>
        );
      })}
    </ScrollView> */}
    <FlatList
      data={dataToRender}
      renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
    />
    <Text style={{ fontSize: 50, backgroundColor: "red" }}>Content After</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 50,
    height: 160,
  },
});

export default App;
