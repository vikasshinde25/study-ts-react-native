import React from "react";

import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Theme from "../style/Theme";
import Home from "../components/Screens/Home";
import Matches from "../components/Screens/Matches";
import { RootStackParamList } from "../types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { More, News } from "../components/Screens";
import { TouchableButton } from "../common";
import { AppDispatch } from "../redux/store";
import { useDispatch } from "react-redux";
import { BottomTabConstant } from "../constants";
import { userLogout } from "../redux/services/UserServices";

const Tab = createBottomTabNavigator();

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "BottomTabNavigator"
>;

type BottomTabNavigatorProps = {
  navigation: HomeScreenNavigationProp;
};

function BottomTabNavigator({ navigation }: BottomTabNavigatorProps) {
  const dispatch = useDispatch<AppDispatch>();

  /* ********** Main return statement of this component ********** */
  return (
    <View style={{ backgroundColor: Theme.baseColor, flex: 1 }}>
      <Tab.Navigator initialRouteName="Home">
        {BottomTabConstant?.map((item) => {
          return (
            <Tab.Screen
              name={item?.tabLabel}
              component={
                item?.tabLabel === "Home"
                  ? Home
                  : item?.tabLabel === "Matches"
                    ? Matches
                    : item?.tabLabel === "News"
                      ? News
                      : item?.tabLabel === "More"
                        ? More
                        : Home
              }
              options={{
                // title: item?.tabLabel,
                headerStyle: {
                  backgroundColor: Theme.baseColor,
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                  fontWeight: "bold",
                },

                headerRight: () => (
                  <TouchableButton
                    buttonText="Logout"
                    buttonType="textBtn-white"
                    onPress={() => {
                      dispatch(userLogout());
                    }}
                    customStyle={{ marginTop: 0 }}
                  />
                ),
              }}
            />
          );
        })}
      </Tab.Navigator>
    </View>
  );
}

export default BottomTabNavigator;
