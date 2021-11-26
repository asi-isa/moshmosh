import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./AppText";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../config/globals";

export default function HeaderBackForth({ backTo, forwardTo }) {
  const [pressed, setPressed] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.con}>
      {backTo && (
        <Pressable
          style={[
            styles.nav_btn_con,
            { borderColor: pressed ? colors.black : colors.black30 },
          ]}
          onPress={() => navigation.navigate(backTo)}
          onPressIn={() => setPressed(true)}
          onPressOut={() => setPressed(false)}
        >
          <MaterialCommunityIcons
            name="arrow-left"
            size={33}
            color={pressed ? colors.black : colors.black30}
            style={[
              styles.nav_btn,
              { borderColor: pressed ? colors.black : colors.black30 },
            ]}
          />
        </Pressable>
      )}

      {forwardTo && (
        <Pressable
          style={[
            styles.nav_btn_con,
            { borderColor: pressed ? colors.black : colors.black30 },
          ]}
          onPress={() => navigation.navigate(forwardTo)}
          onPressIn={() => setPressed(true)}
          onPressOut={() => setPressed(false)}
        >
          <MaterialCommunityIcons
            name="arrow-right"
            size={33}
            color={pressed ? colors.black : colors.black30}
            style={[
              styles.nav_btn,
              { borderColor: pressed ? colors.black : colors.black30 },
            ]}
          />
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  con: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
  },
  nav_btn_con: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 16,
  },
  nav_btn: {},
});
