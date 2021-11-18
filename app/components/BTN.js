import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import globals from "../config/globals";
import H2Text from "./H2Text";

export default function BTN({ children, btnStyles, textStyles }) {
  return (
    <TouchableOpacity style={[styles.btn, btnStyles]}>
      <H2Text addStyles={[styles.text, textStyles]}>{children}</H2Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: globals.primary,
    borderRadius: 16,
    marginVertical: 8,
  },
  text: {
    color: globals.white,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 8,
    textTransform: "uppercase",
  },
});
