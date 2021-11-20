import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import Card from "../components/Card";
import globals from "../config/globals";

export default function MainScreen() {
  const [cards, setCards] = useState([
    {
      image: require("../assets/bg.jpg"),
      title: "Some Some",
      subtitle: "9.99",
      id: 3,
    },
    {
      image: require("../assets/bg.jpg"),
      title: "Some Stuff",
      subtitle: "9.99",
      id: 33,
    },
    {
      image: require("../assets/bg.jpg"),
      title: "Some Stuff",
      subtitle: "9.99",
      id: 333,
    },
  ]);

  return (
    <View style={styles.con}>
      <FlatList
        data={cards}
        renderItem={({ item }) => (
          <Card
            image={item.image}
            title={item.title}
            subtitle={item.subtitle}
            style={styles.card}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  con: {
    flex: 1,
    backgroundColor: globals.creamwhite,
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  card: {
    marginBottom: 16,
  },
});
