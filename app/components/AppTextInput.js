import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../config/globals";

export default function AppTextInput({
  icon,
  iconSize = 16,
  placeholder,
  getInput,
  ...inputProps
}) {
  const [textInput, setTextInput] = useState("");
  const [focus, setFocus] = useState(false);

  return (
    <View
      style={[
        styles.con,
        { borderBottomColor: focus ? colors.darkGrey : colors.grey },
      ]}
    >
      <MaterialCommunityIcons
        name={icon}
        size={iconSize}
        color={focus ? colors.darkGrey : colors.grey}
      />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChangeText={(text) => setTextInput(text)}
        onSubmitEditing={() => getInput(textInput)}
        {...inputProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  con: {
    padding: 4,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    marginHorizontal: 16,
  },
  input: {
    marginLeft: 8,
  },
});
