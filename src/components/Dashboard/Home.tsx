import React from "react";

import { Button, Text, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RootStackParamList } from "../../types";

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

type HomeProps = {
  navigation: HomeScreenNavigationProp;
};

function Home({ navigation }: HomeProps) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Matches"
        onPress={() => navigation.navigate("Matches")}
      />
    </View>
  );
}

export default Home;
