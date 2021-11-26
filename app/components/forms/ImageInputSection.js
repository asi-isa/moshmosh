import React, { useState } from "react";
import { Image, StyleSheet, View, ScrollView, Pressable } from "react-native";
import Tooltip from "../Tooltip";

import AppImageInput from "./AppImageInput";

export default function ImageInputSection({ fieldName, style }) {
  const [images, setImages] = useState([]);
  const [showTooltip, setShowTooltip] = useState(false);

  function removeImage(uri) {
    setImages((currentImages) =>
      currentImages.filter((imageUri) => imageUri !== uri)
    );
  }

  function toggleTooltip(duration) {
    setShowTooltip(true);

    setTimeout(() => {
      setShowTooltip(false);
    }, duration);
  }

  return (
    <ScrollView contentContainerStyle={[styles.con, style]} horizontal>
      <AppImageInput
        fieldName={fieldName}
        setImages={setImages}
        images={images}
        style={styles.imgInput}
      />
      {images.map((imgUri, index) => (
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
