import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";
import globals from "../config/globals";

export default function LDScreen() {
  return (
    <View style={styles.con}>
      <Card
        title="some good stuff"
        subtitle="99.99"
        image={require("../assets/bg.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  con: {
    flex: 1,
    backgroundColor: globals.creamwhite,
    padding: 16,
  },
});
