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
  { value: 0, name: "somestuff", icon: "cards", color: "#fc5c65" },
  { value: 1, name: "electronic", icon: "headphones", color: "#fd9644" },
  { value: 2, name: "sport", icon: "basketball", color: "#fed330" },
  { value: 3, name: "books", icon: "book", color: "#26de81" },
  { value: 2, name: "sport", icon: "basketball", color: "#fed330" },
  { value: 3, name: "books", icon: "book", color: "#26de81" },
];

export default function AppFormPicker({ name, ...otherProps }) {
  const [pressed, setPressed] = useState(false);
  const { values, touched, errors } = useFormikContext();

  return (
    <>
      <View
        style={[
          styles.con,
          { borderColor: pressed ? colors.primary : colors.primary50 },
        ]}
      >
        <Pressable
          //onPress={}
          onPressIn={() => setPressed(true)}
          //onPressOut={() => setPressed(false)}
          hitSlop={10}
          style={[styles.pressable]}
        >
          <Text style={styles.input}>
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
            onPress={setPressed}
            data={OPTIONS}
          />
        </Pressable>
      </View>
      {touched[name] && <Text style={{ color: "red" }}>{errors[name]}</Text>}
    </>
  );
}

const styles = StyleSheet.create({
  con: {
    padding: 9,
    marginBottom: 8,
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
