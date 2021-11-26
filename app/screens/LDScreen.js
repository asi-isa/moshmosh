import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";
import HeaderBackForth from "../components/HeaderBackForth";
import globals from "../config/globals";

export default function LDScreen({ route }) {
  const { image, subtitle, title } = route.params;

  return (
    <>
      <HeaderBackForth backTo="Main" />

      <View style={styles.con}>
        <Card title={title} subtitle={subtitle} image={image} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  con: {
    flex: 1,
    backgroundColor: globals.creamwhite,
    padding: 16,
  },
});
