import React from "react";
import { View, Text, Button } from "react-native";
const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen stack</Text>
      <Button
        title="Go to Home Profile"
        onPress={() => navigation.navigate("Profile", { fruits: "pepeppe" })}
      />
    </View>
  );
};

export default HomeScreen;
