import React, { useRef, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Alert,
} from "react-native";

const InputsScreen = () => {
  const numberInputRef = useRef<TextInput>(null);
  const [text, onChangeText] = useState("");
  const [number, onChangeNumber] = useState("");
  let textNew = "";

  console.log("test", text);
  return (
    <SafeAreaView>
      <View style={{ padding: 20 }}>
        <Text>Inputs</Text>
        <TextInput
          placeholder="Useless text input"
          style={styles.input}
          // onChangeText={(text) => (textNew = text)}
          // value={textNew}
          returnKeyType="done"
          onSubmitEditing={() => {
            numberInputRef.current?.focus();
          }}
        />

        <TextInput
          ref={numberInputRef}
          placeholder="Useless number input"
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          keyboardType="number-pad"
          returnKeyType="done"
          onSubmitEditing={() => {
            Alert.alert("You are great", "Fit Panda is awesome");
          }}
        />
      </View>
    </SafeAreaView>
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

export default InputsScreen;
