import { Dimensions, StyleSheet, Platform } from "react-native";

export default {
  white: "#fff",
  grey: "#6E7C7C",
  yellow: "#ffe66d",
  creamwhite: "#f8f4f4",
  primary: "#EB686B",
  secondary: "#73CBC4",
  vw: Dimensions.get("screen").width,
  vh: Dimensions.get("screen").height,
};

const defaultStyles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Robto" : "Avenir",
  },
});

const colors = {
  white: "#fff",
  grey: "#6E7C7C",
  darkGrey: "#0c0c0c",
  yellow: "#ffe66d",
  creamwhite: "#f8f4f4",
  primary: "#EB686B",
  secondary: "#73CBC4",
};

export { defaultStyles, colors };
