import React, { useState, useEffect } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFormikContext } from "formik";
import { colors } from "../../config/globals";

export default function AppImageInput({ fieldName, style, addImage, images }) {
  const [active, setActive] = useState(false);
  const { errors, touched } = useFormikContext();

  async function getMediaPermission() {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!");
    }
  }

  async function pickImage() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      addImage(result.uri);
    }
  }

  useEffect(() => {
    getMediaPermission();
  }, []);

  return (
    <>
      <View
        style={[
          styles.con,
          style,
          { borderColor: active ? colors.primary : colors.primary50 },
        ]}
      >
        <Pressable
          onPress={pickImage}
          onPressIn={() => setActive(true)}
          onPressOut={() => setActive(false)}
        >
          <MaterialCommunityIcons name="camera" size={42} />
        </Pressable>
      </View>
      {touched[fieldName] && errors[fieldName] && (
        <Text style={{ color: "red" }}>{errors[fieldName]}</Text>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  con: {
    backgroundColor: colors.primary10,
    borderWidth: 2,
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
});
