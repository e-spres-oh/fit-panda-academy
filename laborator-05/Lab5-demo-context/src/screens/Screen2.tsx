import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useContext, useRef, useState } from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { MyContext } from "../store/myStore";

const Screen2 = ({ navigation }: any) => {
  const [data, setData] = useState("");
  const myState = useContext(MyContext);
  return (
    <View>
      <TextInput
        onChangeText={(text) => setData(text)}
        style={{ margin: 5, borderWidth: 1, borderColor: Colors.gray }}
      />
      <Button
        title="Save & Next"
        onPress={() => {
          myState.setScreen2Data(data);
          navigation.navigate("Screen3");
        }}
      />
      <Text>{"Screen 1 Data: " + myState.getScreen1Data()}</Text>
      <Text>{"Screen 2 Data: " + myState.getScreen2Data()}</Text>
      <Text>{"Screen 3 Data: " + myState.getScreen3Data()}</Text>
    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({});
