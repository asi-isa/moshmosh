import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

import globals from "../config/globals";
import H2Text from "./H2Text";

export default function Card({ title, subtitle, image }) {
  return (
    <ImageBackground style={styles.img_bg} source={image}>
      <View style={styles.con}>
        <H2Text addStyles={styles.title}>{title}</H2Text>
        <Text style={styles.subtitle}>$ {subtitle}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  img_bg: {
    height: globals.vh * 0.42,
    justifyContent: "flex-end",
    borderRadius: 16,
    overflow: "hidden",
  },
  con: {
    backgroundColor: globals.white,
    padding: 16,
  },
  title: {
    marginBottom: 8,
  },
  subtitle: {
    color: globals.secondary,
  },
});
