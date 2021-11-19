import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import globals from "../config/globals";
import UserCard from "../components/UserCard";
import ListItem from "../components/ListItem";

export default function AccountScreen() {
  return (
    <View style={styles.con}>
      <UserCard
        img={require("../assets/bg.jpg")}
        name="Ali Inceoglu"
        email="ali.inceoglu@mail.com"
        style={{ marginBottom: 21 }}
      />

      <View style={styles.list_items}>
        <ListItem
          icon={
            <MaterialCommunityIcons
              name="format-list-bulleted"
              size={21}
              color={globals.white}
            />
          }
          color={globals.primary}
          title="My Listings"
        />
        <ListItem
          icon={
            <MaterialCommunityIcons
              name="email"
              size={21}
              color={globals.white}
            />
          }
          color={globals.secondary}
          title="My Messages"
        />
      </View>

      <ListItem
        icon={
          <MaterialCommunityIcons
            name="logout"
            size={21}
            color={globals.white}
          />
        }
        color={globals.yellow}
        title="Log Out"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  con: {
    flex: 1,
    backgroundColor: globals.creamwhite,
  },
  list_items: {
    marginBottom: 33,
  },
});
