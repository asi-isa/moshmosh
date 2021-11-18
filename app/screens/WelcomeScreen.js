import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import BTN from "../components/BTN";

import globals from "../config/globals";
import H2Text from "../components/H2Text";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.img}
      source={require("../assets/bg.jpg")}
      resizeMode="cover"
      blurRadius={6}
    >
      <View style={styles.logo_con}>
        <Image style={styles.logo} source={require("../assets/favicon.png")} />
        <H2Text addStyles={styles.logo_text}>sell what you don't need</H2Text>
      </View>

      <View style={styles.auth_con}>
        <BTN>login</BTN>
        <BTN btnStyles={{ backgroundColor: globals.secondary }}>sign up</BTN>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  img: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: globals.vh * 0.1,
    paddingBottom: globals.vh * 0.02,
  },
  logo_con: {
    alignSelf: "center",
    alignItems: "center",
  },
  logo: {
    marginBottom: 16,
  },
  logo_text: {
    fontSize: 20,
    fontWeight: "400",
    textTransform: "capitalize",
  },
  auth_con: {
    // borderColor: "red",
    // borderWidth: 2,
    paddingHorizontal: 16,
  },
  auth: {},
});
