import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import globals from "../config/globals";
import AppText from "./AppText";

export default function Card({ title, price, imageUrl, style, onPress }) {
  return (
    <Pressable onPress={onPress}>
      <ImageBackground
        style={[styles.img_bg, style]}
        source={{ uri: imageUrl }}
      >
        <View style={styles.con}>
          <AppText style={styles.title}>{title}</AppText>
          <Text style={styles.subtitle}>$ {price}</Text>
        </View>
      </ImageBackground>
    </Pressable>
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
