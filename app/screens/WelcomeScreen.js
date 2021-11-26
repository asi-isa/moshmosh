import React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  Pressable,
} from "react-native";
import BTN from "../components/BTN";

import globals from "../config/globals";
import AppText from "../components/AppText";

export default function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.img}
      source={require("../assets/bg.jpg")}
      resizeMode="cover"
      blurRadius={6}
    >
      <View style={styles.logo_con}>
        <Image style={styles.logo} source={require("../assets/favicon.png")} />
        <AppText addStyles={styles.logo_text}>sell what you don't need</AppText>
      </View>

      <View style={styles.auth_con}>
        <BTN onPress={() => navigation.navigate("Login")}>Login</BTN>
        <BTN
          onPress={() => navigation.navigate("Register")}
          btnStyles={{ backgroundColor: globals.secondary }}
        >
          Register
        </BTN>
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
