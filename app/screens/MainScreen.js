import React from "react";
import { FlatList, StyleSheet, View, ActivityIndicator } from "react-native";
import LottieView from "lottie-react-native";

import { supabase } from "../db/supabase";
import Card from "../components/Card";
import globals, { colors } from "../config/globals";
import useRequest from "../hooks/useRequest";

export default function MainScreen({ navigation }) {
  const { loading, error, data } = useRequest(() =>
    supabase.from("listings").select("*")
  );

  return (
    <View style={styles.con}>
      {data ? (
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
      ) : (
        <LottieView source={require("../assets/loader_red.json")} />
      )}
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
