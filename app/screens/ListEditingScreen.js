import React from "react";
import { StyleSheet, Image, View } from "react-native";
import * as Yup from "yup";

import globals, { colors } from "../config/globals";
import { AppForm, AppFormField, AppSubmitButton } from "../components/forms";
import AppText from "../components/AppText";
import AppFormPicker from "../components/forms/AppFormPicker";
import AppImageInput from "../components/forms/AppImageInput";
import { useFormikContext } from "formik";
import ImageInputSection from "../components/forms/ImageInputSection";

const validationSchema = Yup.object().shape({
  img: Yup.array().required().label("Image"),
  title: Yup.string().required().min(4).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().required().label("Category"),
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
          initialValues={{
            img: "",
            title: "",
            price: "",
            category: "",
            description: "",
          }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <ImageInputSection fieldName="img" style={styles.childStyles} />

          <AppFormField
            name="title"
            style={styles.childStyles}
            placeholder="Title"
          />
          <AppFormField
            name="price"
            style={styles.childStyles}
            placeholder="Price"
          />
          <AppFormField
            name="description"
            style={styles.childStyles}
            placeholder="Description"
          />

          <AppFormPicker name="category" style={styles.childStyles} />

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
  childStyles: {
    marginBottom: 8,
  },
});
