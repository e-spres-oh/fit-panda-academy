import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useContext, useRef, useState } from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { MyContext } from "../store/myStore";

const RegisterScreen = ({ navigation }: any) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const myStore = useContext(MyContext);
  return (
    <View>
      <Text>UserName</Text>
      <TextInput
        onChangeText={(text) => setUsername(text)}
        style={{ margin: 5, borderWidth: 1, borderColor: Colors.gray }}
      />
      <Text>Password</Text>
      <TextInput
        onChangeText={(text) => setPassword(text)}
        style={{ margin: 5, borderWidth: 1, borderColor: Colors.gray }}
      />
      <Button
        title="Register"
        onPress={async () => {
          await myStore.register(username, password);
          navigation.navigate("Home");
        }}
      />
      <Text>{"store: " + JSON.stringify(myStore)}</Text>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
