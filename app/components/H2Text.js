import React from "react";
import { StyleSheet, Text, Platform } from "react-native";

export default function H2Text({ children, addStyles }) {
  return <Text style={[styles.text, addStyles]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    ...Platform.select({
      ios: {
        fontSize: 18,
        fontFamily: "Avenir",
      },
      android: {
        fontSize: 18,
        fontFamily: "Roboto",
      },
    }),
  },
});
