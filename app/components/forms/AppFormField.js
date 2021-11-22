import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFormikContext } from "formik";

import AppTextInput from "./AppTextInput";
import globals from "../../config/globals";

export default function AppFormField({ name, ...otherProps }) {
  const { handleChange, setFieldTouched, touched, errors } = useFormikContext();

  return (
    <View style={styles.con}>
      <AppTextInput
        name={name}
        onChangeText={handleChange(name)}
        setFieldTouched={setFieldTouched}
        {...otherProps}
      />

      {touched[name] && <Text style={{ color: "red" }}>{errors[name]}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  con: {},
});
