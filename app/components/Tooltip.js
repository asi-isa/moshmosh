import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { colors } from "../config/globals";
import AppText from "./AppText";

export default function Tooltip({ text }) {
  return (
    <View style={[styles.con, StyleSheet.absoluteFill]}>
      <AppText style={styles.text}>{text}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  con: {
    position: "absolute",
    padding: 6,
    backgroundColor: colors.white,
    opacity: 0.8,
    justifyContent: "center",
  },
  text: {},
});
