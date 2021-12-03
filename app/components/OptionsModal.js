import React from "react";
import { StyleSheet, Modal, Pressable, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import OptionItem from "./OptionItem";

export default function OptionsModal({
  name,
  visible,
  setPressed,
  setValues,
  data,
}) {
  return (
    <Modal animationType="slide" visible={visible}>
      <Pressable onPress={() => setPressed(false)}>
        <MaterialCommunityIcons name="close" size={42} style={styles.icon} />
      </Pressable>
      <View style={styles.modal_view}>
        {data.map((option, index) => (
          <OptionItem
            name={name}
            option={option}
            setPressed={setPressed}
            setValues={setValues}
            key={index}
          />
        ))}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal_view: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
  },
  icon: { alignSelf: "center", marginTop: 33 },
});
