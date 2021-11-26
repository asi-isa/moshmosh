import React from "react";
import { StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import globals from "./app/config/globals";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigation from "./app/navigation/AppNavigation";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer theme={navigationTheme}>
        <AppNavigation />
      </NavigationContainer>
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
