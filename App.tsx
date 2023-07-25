import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { StyleProvider } from "react-native-zephyr";
import Main from "./components/main";

export default function App() {
  return (
    <StyleProvider>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
      <Main />
    </StyleProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
