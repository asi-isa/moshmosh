import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import globals from "../config/globals";
import AppText from "./AppText";

export default function UserCard({ img, name, email, style }) {
  return (
    <View style={[styles.user, style]}>
      <Image style={styles.img} source={img} />

      <View style={styles.user_info}>
        <AppText addStyles={styles.user_name}>{name}</AppText>
        <Text style={styles.user_email}>{email}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  user: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    backgroundColor: globals.white,
  },
  img: {
    width: 66,
    height: 66,
    borderRadius: 50,
    marginRight: 16,
  },
  user_info: {
    // height: "100%",
    alignSelf: "stretch",
    justifyContent: "space-evenly",
  },
  user_name: {
    fontWeight: "600",
  },
  user_email: {
    color: globals.grey,
  },
});
