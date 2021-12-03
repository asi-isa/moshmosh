import React, { useState } from "react";
import { StyleSheet, View, Pressable, TouchableOpacity } from "react-native";

import AppText from "../AppText";
import globals, { colors } from "../../config/globals";

export default function AppSubmitButton({ title, style }) {
  const [pressed, setPressed] = useState(false);

  return (
    <Pressable
      style={[
        styles.btn_con,
        style,
        { borderColor: pressed ? colors.primary : colors.primary30 },
      ]}
      onPress={handleSubmit}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
    >
      <AppText style={styles.btn_text}>{title}</AppText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn_con: {
    borderWidth: 2,
    borderRadius: 16,
    paddingVertical: 8,
    alignItems: "center",
  },
  btn_text: {
    fontWeight: "700",
  },
});
