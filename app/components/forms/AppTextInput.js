import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { colors } from "../../config/globals";

export default function AppTextInput({
  name,
  setValues,
  icon,
  iconSize = 16,
  placeholder,
  style,
  ...inputProps
}) {
  const [focus, setFocus] = useState(false);

  return (
    <View
      style={[
        styles.con,
        style,
        { borderColor: focus ? colors.primary : colors.primary50 },
      ]}
    >
      <MaterialCommunityIcons
        name={icon}
        size={iconSize}
        color={focus ? colors.darkGrey : colors.grey}
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) =>
          setValues((currentValues) => ({ ...currentValues, [name]: text }))
        }
        placeholder={name}
        placeholderTextColor={colors.grey}
        autoCapitalize="none"
        autoCorrect={false}
        onFocus={() => {
          setFocus(true);
        }}
        onBlur={() => {
          setFocus(false);
        }}
        {...inputProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  con: {
    padding: 9,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 16,
    backgroundColor: colors.primary10,
  },
  input: {
    fontSize: 20,
    width: "100%",
    marginLeft: 8,
  },
});
