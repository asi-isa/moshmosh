import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

export default function ImageOverlay({
  source,
  overlayColor,
  overlayOpacity,
  children,
  style,
  childrenStyle,
  ...otherProps
}) {
  return (
    <ImageBackground
      style={[styles.con, style]}
      source={source}
      {...otherProps}
    >
      <View
        style={[
          styles.overlay,
          childrenStyle,
          { backgroundColor: overlayColor, opacity: overlayOpacity },
        ]}
      >
        {children}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  con: {},
  overlay: {
    ...StyleSheet.absoluteFill,
  },
});
