import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

import AppTextInput from "./AppTextInput";

export default function AppFormField({ name, setValues, ...otherProps }) {
  return (
    <View style={styles.con}>
      <AppTextInput name={name} setValues={setValues} {...otherProps} />

      {/* {touched[name] && errors[name] && (
        <Text style={{ color: "red" }}>{errors[name]}</Text>
      )} */}
    </View>
  );
}

const styles = StyleSheet.create({
  con: {
    marginBottom: 8,
  },
});
