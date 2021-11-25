import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";

import AppImageInput from "./AppImageInput";

export default function ImageInputSection({ fieldName, style }) {
  const [images, setImages] = useState([]);

  return (
    <View style={[styles.con, style]}>
      <AppImageInput
        fieldName={fieldName}
        setImages={setImages}
        images={images}
        style={styles.imgInput}
      />
      {images.map((imgUri, index) => (
        <Image source={{ uri: imgUri }} key={index} style={styles.images} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  con: {
    flexDirection: "row",
  },
  imgInput: {
    marginRight: 8,
  },
  images: {
    width: 100,
    height: 100,
    marginRight: 8,
    borderRadius: 8,
  },
});
