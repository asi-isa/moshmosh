import React from "react";
import { StyleSheet, Text, View } from "react-native";
import globals from "../config/globals";

import AppText from "./AppText";

export default function ListItem({ icon, color, title, style }) {
  return (
    <View style={[styles.con, style]}>
      <View style={[styles.icon_con, { backgroundColor: color }]}>{icon}</View>
      <AppText style={styles.title}>{title}</AppText>
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
