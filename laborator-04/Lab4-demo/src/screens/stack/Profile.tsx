import React from "react";
import { View, Text } from "react-native";

const ProfileScreen = ({ route }: any) => {
  const { fruits } = route.params;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Profile Screen stack</Text>

      <Text></Text>
      <Text>{`Ce are Ana? ${fruits}`}</Text>
    </View>
  );
};

export default ProfileScreen;
