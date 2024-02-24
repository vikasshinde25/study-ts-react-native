/* ********** React imports ********** */
import React from "react";

/* ********** Third party imports ********** */
import { createNativeStackNavigator } from "@react-navigation/native-stack";

/* ********** Local files imports ********** */
import { Home } from "../components/Screens";

/* ********** MAIN FUNCTION START HERE ********** */
function HomeNavigator() {
  const RootStack = createNativeStackNavigator();

  return (
    <RootStack.Navigator initialRouteName="Home">
      <RootStack.Screen name="Home" component={Home} />
    </RootStack.Navigator>
  );
}

export default HomeNavigator;
/* ********** MAIN FUNCTION END HERE ********** */
