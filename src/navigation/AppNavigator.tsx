import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Theme from "../style/Theme";
import BottomTabNavigator from "./BottomTabNavigator";
import { RootStackParamList } from "../types";
import { ForgotPassword, Login } from "../components/Authentication";

const RootStack = createNativeStackNavigator<RootStackParamList>();

function AppNavigator() {
  /* ********** Main return statement of this component ********** */
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Login">
        {/* Screens for logged in users */}

        {/* <RootStack.Screen
              name="Home"
              component={Home}
              options={{ title: "Home" }}
            />
            <RootStack.Screen
              name="Matches"
              component={Matches}
              options={{ title: "Matches" }}
            />
            <RootStack.Screen
              name="News"
              component={News}
              options={{ title: "News" }}
            />
            <RootStack.Screen
              name="More"
              component={More}
              options={{ title: "More" }}
            /> */}
        <RootStack.Screen
          name="Login"
          component={Login}
          options={{
            title: "Login",
            headerStyle: {
              backgroundColor: Theme.baseColor,
            },
            headerTintColor: "#fff",
          }}
        />
        <RootStack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
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
