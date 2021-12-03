import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import BTN from "../BTN";
import ImageInputSection from "./ImageInputSection";
import AppFormField from "./AppFormField";
import AppFormPicker from "./AppFormPicker";

export default function AppForm() {
  const [values, setValues] = useState({
    imageUrl: [],
    title: "",
    price: "",
    description: "",
    category: "",
  });

  async function submitHandler() {
    console.log(values);
  }

  return (
    <View style={styles.form}>
      <ImageInputSection setValues={setValues} values={values} />

      <AppFormField setValues={setValues} name="title" />
      <AppFormField setValues={setValues} name="price" keyboardType="numeric" />
      <AppFormField setValues={setValues} name="description" />

      <AppFormPicker setValues={setValues} name="category" values={values} />

      <BTN onPress={submitHandler}>post</BTN>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    borderWidth: 1,
    borderColor: "red",
    flex: 1,
  },
});
