import { BarCodeEvent, BarCodeScanner } from "expo-barcode-scanner";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [showBarCodeScanner, setShowBarCodeScanner] = useState(false);
  const [scanned, setScanned] = useState("");
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const onBarCodeScanned = (data: BarCodeEvent) => {
    setScanned(data.data);
    setShowBarCodeScanner(false);
  };

  return (
    <View style={styles.container}>
      <Text>Scanned: {scanned}</Text>
      <Button onPress={() => setShowBarCodeScanner(true)} title="Scan" />
      {showBarCodeScanner && (
        <BarCodeScanner
          onBarCodeScanned={onBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      )}
      <StatusBar style="auto" />
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
