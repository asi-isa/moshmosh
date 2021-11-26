import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppImageInput from "./app/components/forms/AppImageInput";
import globals from "./app/config/globals";
import AccountScreen from "./app/screens/AccountScreen";
import Blank from "./app/screens/Blank";
import LDScreen from "./app/screens/LDScreen";
import ListEditingScreen from "./app/screens/ListEditingScreen";
import LoginScreen from "./app/screens/LoginScreen";
import MainScreen from "./app/screens/MainScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="Details" component={LDScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        {/* <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={WelcomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator> */}

        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen
            name="MainStack"
            component={MainStack}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="ListEditing"
            component={ListEditingScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="plus-box"
                  size={size}
                  color={color}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Account"
            component={AccountScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="account"
                  size={size}
                  color={color}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globals.creamwhite,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
