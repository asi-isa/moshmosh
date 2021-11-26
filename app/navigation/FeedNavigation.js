import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainScreen from "../screens/MainScreen";
import LDScreen from "../screens/LDScreen";

const Stack = createNativeStackNavigator();

export default function FeedNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="Details" component={LDScreen} />
    </Stack.Navigator>
  );
}
