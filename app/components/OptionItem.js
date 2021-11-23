import React from "react";
import { StyleSheet, Text, Pressable } from "react-native";
import { useFormikContext } from "formik";

import globals, { colors } from "../config/globals";
import AppText from "./AppText";

export default function OptionItem({ name, option, setPressed }) {
  const { setFieldValue } = useFormikContext();

  return (
    <Pressable
      style={styles.option}
      onPress={() => {
        setFieldValue(name, option.name);
        setPressed(false);
      }}
    >
      <AppText style={styles.option_text}>{option.name}</AppText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  option: {
    borderColor: colors.primary,
    borderRadius: 8,
    borderWidth: 2,
    padding: 8,
    marginBottom: 16,
    width: globals.vw * 0.42,
  },
  option_text: {
    textAlign: "center",
    fontWeight: "600",
  },
});
