import React from "react";
import { StyleSheet, Image, View } from "react-native";
import * as Yup from "yup";

import globals, { colors } from "../config/globals";
import { AppForm, AppFormField, AppSubmitButton } from "../components/forms";
import AppText from "../components/AppText";
import HeaderBackForth from "../components/HeaderBackForth";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function LoginScreen() {
  return (
    <>
      <HeaderBackForth backTo="Home" />
      <View style={styles.con}>
        <View style={styles.header}>
          <Image style={styles.img} source={require("../assets/favicon.png")} />

          <AppText style={styles.title}>moshmosh</AppText>
        </View>

        <View style={styles.form}>
          <AppForm
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => console.log(values)}
            validationSchema={validationSchema}
          >
            <AppFormField
              name="email"
              placeholder="email@mail.de"
              icon="email"
              iconSize={19}
            />

            <AppFormField
              name="password"
              placeholder="Password"
              secureTextEntry
              icon="lock"
              iconSize={19}
            />

            <AppSubmitButton title="Log in" style={styles.btn} />
          </AppForm>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  con: {
    flex: 1,
    justifyContent: "space-around",
  },
  header: {
    alignItems: "center",
  },
  img: {
    marginBottom: 16,
  },
  title: {
    fontSize: 21,
    fontWeight: "500",
  },
  form: {
    marginHorizontal: globals.vw * 0.05,
  },
  btn: {
    marginTop: globals.vh * 0.05,
  },
});
