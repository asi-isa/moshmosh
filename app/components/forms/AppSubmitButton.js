import React from "react";
import { StyleSheet, Button } from "react-native";
import { useFormikContext } from "formik";

export default function AppSubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();

  return <Button onPress={handleSubmit} title={title} />;
}

const styles = StyleSheet.create({});
