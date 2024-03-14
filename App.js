import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Reporting from "./src/screens/Reporting/Reporting";

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Reporting />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
