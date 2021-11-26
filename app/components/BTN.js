import React from "react";
import { StyleSheet, Pressable } from "react-native";

import globals from "../config/globals";
import AppText from "./AppText";

export default function BTN({ children, btnStyles, textStyles, onPress }) {
  return (
    <Pressable style={[styles.btn, btnStyles]} onPress={onPress}>
      <AppText style={[styles.text, textStyles]}>{children}</AppText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: globals.primary,
    borderRadius: 16,
    marginVertical: 8,
  },
  text: {
    color: globals.white,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 8,
    textTransform: "uppercase",
  },
});
