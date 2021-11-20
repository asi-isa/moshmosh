import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import globals from "./app/config/globals";
import AccountScreen from "./app/screens/AccountScreen";
import Blank from "./app/screens/Blank";
import LDScreen from "./app/screens/LDScreen";
import MainScreen from "./app/screens/MainScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <WelcomeScreen /> */}
      {/* <LDScreen /> */}
      {/* <AccountScreen /> */}
      {/* <MainScreen /> */}
      <Blank />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globals.creamwhite,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
