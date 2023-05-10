import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";

const URL = "https://api.n.io/v2/search?q=yyyyyy";
const URL_POST = "https://api.restful-api.dev/objects";

const FetchScreen = () => {
  const [name, onChangeText] = useState("");

  const [totalPackages, setTotalPackages] = useState<any>(0);

  async function getData() {
    try {
      const response = await fetch(URL);
      const result = await response.json();
      setTotalPackages(result.total);
    } catch (e) {
      setTotalPackages(null);
    }
  }

  async function createUser() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    };

    try {
      const response = await fetch(URL_POST, requestOptions);
      const result = await response.json();
      console.log(JSON.stringify(result));
    } catch (e) {
      console.log(e);
      console.log("Failed to create Fit-Panda user");
    }
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Fetch Screen</Text>
      <Text>{totalPackages && totalPackages}</Text>
      <Text> </Text>
      <Button title="Fetch data" onPress={async () => getData()} />

      <TextInput
        placeholder="Useless number input"
        style={styles.input}
        onChangeText={onChangeText}
        value={name}
        returnKeyType="done"
        onSubmitEditing={async () => {
          await createUser();
        }}
      />

      <Text> </Text>
      <Button title="Create user" onPress={async () => createUser()} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default FetchScreen;
