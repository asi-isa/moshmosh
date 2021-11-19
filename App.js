import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import AccountScreen from "./app/screens/AccountScreen";
import LDScreen from "./app/screens/LDScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <WelcomeScreen /> */}
      {/* <LDScreen /> */}
      <AccountScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
