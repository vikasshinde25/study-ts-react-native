import React from "react";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, Text, View } from "react-native";

import { RootStackParamList } from "../../types";

type MatchesScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Matches"
>;

type MatchesProps = { navigation: MatchesScreenNavigationProp };

function Matches({ navigation }: MatchesProps) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

export default Matches;
