import React, { useRef } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Alert,
} from "react-native";

const ConditionalScreen = () => {
  const numberInputRef = useRef<TextInput>(null);
  const [text, onChangeText] = React.useState<string>("");

  return (
    <SafeAreaView>
      <View style={{ padding: 20 }}>
        <Text>Inputs</Text>
        <TextInput
          placeholder="Useless text input"
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          returnKeyType="next"
          onSubmitEditing={() => {
            numberInputRef.current?.focus();
          }}
        />

        {/* inline if */}
        {!text && <Text>TextEdit is empty</Text>}

        {/* if/else */}
        {true ? (
          text.length > 7 ? (
            <Text>It's enough text</Text>
          ) : (
            <Text>Type more ...</Text>
          )
        ) : (
          <Text>kjshfdhjsg</Text>
        )}

        <Text>
          {text.length === 3 ? "3 characters are entered" : "I can't count"}
        </Text>
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

export default ConditionalScreen;
