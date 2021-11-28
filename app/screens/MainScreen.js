import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import { supabase } from "../db/supabase";
import Card from "../components/Card";
import globals from "../config/globals";

export default function MainScreen({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    request();
  }, []);

  async function request() {
    try {
      const { data, error } = await supabase.from("listings").select("*");
      console.log(data);
      setData(data);
    } catch (error) {}
  }

  return (
    <View style={styles.con}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Card
            imageUrl={item.image_url}
            title={item.title}
            price={item.price}
            style={styles.card}
            onPress={() => navigation.navigate("Details", item)}
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
