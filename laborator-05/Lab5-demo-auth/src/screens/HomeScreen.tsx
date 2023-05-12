import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { MyContext, UserProfile, defaultUserProfile } from "../store/myStore";

const HomeScreen = ({ navigation }: any) => {
  const myStore = useContext(MyContext);
  const [data, setData] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    if (!myStore.isLoggedIn) {
      navigation.navigate("Login");
    }
    myStore.fetchUserProfile().then(() => {
      setData(JSON.stringify(myStore.userProfile));
    });
  }, []);

  return (
    <View>
      <Text>Name</Text>
      <TextInput
        onChangeText={(text) => setName(text)}
        style={{ margin: 5, borderWidth: 1, borderColor: Colors.gray }}
      />
      <Button
        title="Set Profile"
        onPress={async () => {
          const profile: UserProfile = {
            ...(myStore.userProfile ?? defaultUserProfile),
            name,
          };
          await myStore.saveUserProfile(profile, myStore.userId);
          setData(JSON.stringify(myStore.userProfile));
        }}
      />
      <Button
        title="Get Profile"
        onPress={async () => {
          await myStore.fetchUserProfile();
          setData(JSON.stringify(myStore.userProfile));
        }}
      />
      <Button
        title="Logout"
        onPress={() => {
          myStore.logout();
          navigation.navigate("Login");
        }}
      />
      <Text>{"store: " + JSON.stringify(myStore)}</Text>
      <Text>{"profile: " + data}</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
