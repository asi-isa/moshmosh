import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Blank() {
  function getInput(text) {
    console.log(text);
  }

  return <View style={styles.con}></View>;
}

const styles = StyleSheet.create({
  con: {
    flex: 1,
  },
});
