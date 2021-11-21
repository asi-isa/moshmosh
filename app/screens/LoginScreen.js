import React from "react";
import { StyleSheet, TextInput, Button, View, Text } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import { AppForm, AppFormField, AppSubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function LoginScreen() {
  return (
    <View style={styles.con}>
      <View style={styles.form}>
        <AppForm
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <AppFormField name="email" autoFocus placeholder="email@mail.de" />

          <AppFormField
            name="password"
            placeholder="Password"
            secureTextEntry
          />

          <AppSubmitButton title="go" />
        </AppForm>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  con: {
    padding: 16,
  },
  form: {},
});
