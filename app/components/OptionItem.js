import React from "react";
import { StyleSheet, View, Pressable } from "react-native";
import { useFormikContext } from "formik";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import globals, { colors } from "../config/globals";
import AppText from "./AppText";

export default function OptionItem({ name, option, setPressed }) {
  const { setFieldValue } = useFormikContext();

  return (
    <Pressable
      style={styles.option}
      onPress={() => {
        setFieldValue(name, option);
        setPressed(false);
      }}
    >
      <View
        style={[
          styles.icon_con,
          {
            backgroundColor: option.color,
          },
        ]}
      >
        <MaterialCommunityIcons
          name={option.icon}
          size={26}
          color={colors.white}
          style={[
            styles.icon,
            {
              //backgroundColor: option.color,
            },
          ]}
        />
      </View>
      <AppText style={styles.option_text}>{option.name}</AppText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  option: {
    padding: 8,
    marginBottom: 16,
    alignItems: "center",
    width: 100,
  },
  icon_con: {
    borderRadius: 50,
    height: 55,
    width: 55,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 6,
  },
  icon: {
    padding: 8,
  },
  option_text: {
    textAlign: "center",
    fontSize: 17,
  },
});
