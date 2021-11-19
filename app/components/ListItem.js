import React from "react";
import { StyleSheet, Text, View } from "react-native";
import globals from "../config/globals";

import H2Text from "./H2Text";

export default function ListItem({ icon, color, title, style }) {
  return (
    <View style={[styles.con, style]}>
      <View style={[styles.icon_con, { backgroundColor: color }]}>{icon}</View>
      <H2Text addStyles={styles.title}>{title}</H2Text>
    </View>
  );
}

const styles = StyleSheet.create({
  con: {
    flexDirection: "row",
    backgroundColor: globals.white,
    alignItems: "center",
    padding: 8,
    marginBottom: 2,
  },
  icon_con: {
    padding: 5,
    borderRadius: 50,
    marginRight: 16,
  },
  title: {},
});
