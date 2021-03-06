import React, { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { useFormikContext } from "formik";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { colors } from "../../config/globals";
import OptionItem from "../OptionItem";
import OptionsModal from "../OptionsModal";

const OPTIONS = [
  { value: 0, name: "somestuff", icon: "cards", color: "#fc5c65" },
  { value: 1, name: "electronic", icon: "headphones", color: "#fd9644" },
  { value: 2, name: "sport", icon: "basketball", color: "#fed330" },
  { value: 3, name: "books", icon: "book", color: "#26de81" },
  { value: 4, name: "somi", icon: "cards", color: "#fe5d15" },
  { value: 5, name: "electo", icon: "headphones", color: "#ad96f4" },
  ,
];

export default function AppFormPicker({
  name,
  setValues,
  values,
  style,
  ...otherProps
}) {
  const [pressed, setPressed] = useState(false);

  return (
    <>
      <View
        style={[
          styles.con,
          style,
          { borderColor: pressed ? colors.primary : colors.primary50 },
        ]}
      >
        <Pressable
          onPress={() => setPressed(true)}
          //hitSlop={10}
          style={[styles.pressable]}
        >
          <Text style={[styles.input, values[name] && { color: colors.black }]}>
            {values[name] ? values[name].name : "Category"}
          </Text>

          <MaterialCommunityIcons
            name="chevron-down"
            size={25}
            color={colors.grey}
          />

          <OptionsModal
            name={name}
            visible={pressed}
            setPressed={setPressed}
            setValues={setValues}
            data={OPTIONS}
          />
        </Pressable>
      </View>
      {/* {touched[name] && errors[name] && (
        <Text style={{ color: "red" }}>{errors[name]}</Text>
      )} */}
    </>
  );
}

const styles = StyleSheet.create({
  con: {
    padding: 9,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 2,
    borderRadius: 16,
    backgroundColor: colors.primary10,
  },
  pressable: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    fontSize: 20,
    marginLeft: 8,
    color: colors.grey,
  },
});
