import React from "react";
import { View, Text } from "react-native";

const ProfileScreen = () => {
  React.useEffect(() => {
    console.log("rendered");
    return () => console.log("unnn rendered");
  }, []);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Profile Screen Drawer</Text>
    </View>
  );
};

export default ProfileScreen;
