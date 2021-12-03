import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  View,
  ScrollView,
  Pressable,
  Alert,
} from "react-native";

import Tooltip from "../Tooltip";
import AppImageInput from "./AppImageInput";

export default function ImageInputSection({ setValues, values, style }) {
  const { imageUrl } = values;
  const [showTooltip, setShowTooltip] = useState(false);

  function addImage(uri) {
    if (imageUrl.length < 3) {
      setValues((currentValues) => ({
        ...currentValues,
        imageUrl: [...imageUrl, uri],
      }));
    } else Alert.alert(null, "max 3 images");
  }

  function removeImage(uri) {
    setValues((currentValues) => ({
      ...currentValues,
      imageUrl: imageUrl.filter((imgUrl) => imgUrl != uri),
    }));
  }

  function toggleTooltip(duration) {
    setShowTooltip(true);

    setTimeout(() => {
      setShowTooltip(false);
    }, duration);
  }

  return (
    <ScrollView contentContainerStyle={[styles.con, style]} horizontal>
      <AppImageInput addImage={addImage} style={styles.imgInput} />
      {imageUrl.map((imgUri, index) => (
        <Pressable
          key={index}
          onLongPress={() => removeImage(imgUri)}
          onPress={() => toggleTooltip(2000)}
        >
          <Image source={{ uri: imgUri }} style={styles.img} key={index} />
          {showTooltip && <Tooltip text="Longpress for deletion" />}
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  con: {
    borderWidth: 1,
    borderColor: "blue",
  },
  imgInput: {
    marginRight: 8,
  },
  img: {
    width: 100,
    height: 100,
    marginRight: 8,
    borderRadius: 8,
  },
});
