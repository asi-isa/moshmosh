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
  black: "#000",
  black30: "rgba(0,0,0,0.3)",
  white: "#fff",
  grey: "#6E7C7C",
  lightGrey: "#E8E1D9",
  darkGrey: "#0c0c0c",
  yellow: "#ffe66d",
  creamwhite: "#f8f4f4",
  primary: "rgba(235,104,107,1)",
  primary50: "rgba(235,104,107,0.5)",
  primary30: "rgba(235,104,107,0.3)",
  primary10: "rgba(235,104,107,0.1)",
  secondary: "#73CBC4",
};

export { defaultStyles, colors };
