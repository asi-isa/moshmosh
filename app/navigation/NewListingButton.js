import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../config/globals";

export default function NewListingButton({ onPress }) {
  return (
    <Pressable style={styles.con} onPress={onPress}>
      <MaterialCommunityIcons name="plus-box" size={42} color="white" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  con: {
    width: 61,
    height: 61,
    bottom: 15,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
  },
});
