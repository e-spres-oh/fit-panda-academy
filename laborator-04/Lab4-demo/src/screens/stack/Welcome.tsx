import React from "react";
import { View, Text, Button } from "react-native";

const WelcomeScreen = ({ navigation }: any) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Fit Panda is happy to see you again</Text>
      {navigation && (
        <Button
          title="Go to Home Screen"
          onPress={() => navigation.navigate("Home")}
        />
      )}
    </View>
  );
};

export default WelcomeScreen;
