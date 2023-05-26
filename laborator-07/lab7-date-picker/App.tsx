import { Button, Platform, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import RNDateTimePicker from "@react-native-community/datetimepicker";

export default function App() {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    if (Platform.OS === "android") setShow(false);
    setDate(currentDate);
  };

  return (
    <View style={{ paddingTop: 100 }}>
      <Button onPress={() => setShow(true)} title="Show date picker!" />
      {Platform.OS === "ios" && (
        <Button onPress={() => setShow(false)} title="Hide date picker!" />
      )}
      <Text>selected: {date.toLocaleString()}</Text>
      {show && (
        <RNDateTimePicker
          display="spinner"
          value={date}
          onChange={onChange}
          mode="date"
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
