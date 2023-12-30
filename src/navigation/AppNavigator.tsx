import React from "react";

import { StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ForgotPassword, Login } from "../components/Authentication";
import Home from "../components/Dashboard/Home";
import { RootStackParamList } from "../types";
import Matches from "../components/Dashboard/Matches";

const RootStack = createNativeStackNavigator<RootStackParamList>();

function AppNavigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Login">
        <RootStack.Screen name="Login" component={Login} />
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="Matches" component={Matches} />
        <RootStack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{ title: "Forgot Password" }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
