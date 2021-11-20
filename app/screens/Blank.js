import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppTextInput from "../components/AppTextInput";

export default function Blank() {
  function getInput(text) {
    console.log(text);
  }

  return (
    <View style={styles.con}>
      <AppTextInput placeholder="email@mail.com" secureTextEntry />
      <AppTextInput
        icon="email"
        placeholder="email@mail.com"
        getInput={getInput}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  con: {
    flex: 1,
  },
});
