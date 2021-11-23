import React from "react";
import { StyleSheet, Image, View } from "react-native";
import * as Yup from "yup";

import globals, { colors } from "../config/globals";
import { AppForm, AppFormField, AppSubmitButton } from "../components/forms";
import AppText from "../components/AppText";
import AppFormPicker from "../components/forms/AppFormPicker";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(4).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.string().required().label("Category"),
  description: Yup.string().label("Description"),
});

export default function ListEditingScreen() {
  return (
    <View style={styles.con}>
      <View style={styles.header}>
        <Image style={styles.img} source={require("../assets/favicon.png")} />

        <AppText style={styles.title}>moshmosh</AppText>
      </View>

      <View style={styles.form}>
        <AppForm
          initialValues={{ title: "", price: 0, category: "", description: "" }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <AppFormField name="title" autoFocus placeholder="Title" />
          <AppFormField name="price" placeholder="Price" />
          <AppFormPicker name="category" />
          <AppFormField name="description" placeholder="Description" />

          <AppSubmitButton title="Post" style={styles.btn} />
        </AppForm>
      </View>
    </View>
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
