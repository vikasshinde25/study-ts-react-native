import React, { useState } from "react";

import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Theme from "../style/Theme";
import { RootStackParamList } from "../types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { Home, Matches, More, News, Video } from "../components/Screens";
import { Icon, TouchableButton } from "../common";
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
  const [lougOutLoader, setLougOutLoader] = useState(false);
  const [lougOutError, setLogOutError] = useState("");

  // handle user logout event
  const handleUserLogoutEvents = () => {
    dispatch(userLogout())
      .unwrap()
      .then(() => {
        navigation.navigate("Login");
        setLougOutLoader(false);
        setLogOutError("");
      })
      .catch(
        (error: {
          data: { non_field_errors: React.SetStateAction<string>[] };
        }) => {
          setLougOutLoader(false);
          setLogOutError(error?.data?.non_field_errors?.[0]);
        }
      );
  };

  /* ********** Main return statement of this component ********** */
  return (
    <View style={{ backgroundColor: Theme.baseColor, flex: 1 }}>
      <Tab.Navigator
        initialRouteName="HomeNavigator"
        screenOptions={{
          tabBarActiveTintColor: Theme.white,
          tabBarInactiveTintColor: Theme.white,
          tabBarStyle: {
            backgroundColor: Theme.baseColor,
            paddingTop: 5,
            paddingBottom: 5,
          },
          // tabBarBackground: () => (
          //   <BlurView
          //     tint="light"
          //     intensity={100}
          //     style={StyleSheet.absoluteFill}
          //   />
          // ),
        }}
      >
        {BottomTabConstant?.map((item) => {
          return (
            <Tab.Screen
              name={item?.tabLabel}
              key={item?.tabLabel}
              component={
                item?.tabLabel === "Home"
                  ? Home
                  : item?.tabLabel === "Matches"
                  ? Matches
                  : item?.tabLabel === "News"
                  ? News
                  : item?.tabLabel === "Video"
                  ? Video
                  : item?.tabLabel === "More"
                  ? More
                  : Home
              }
              options={{
                tabBarIcon: () => (
                  <Icon
                    size="large"
                    color={Theme.white}
                    name={
                      item?.tabLabel === "Home"
                        ? "home"
                        : item?.tabLabel === "Matches"
                        ? "cricket"
                        : item?.tabLabel === "News"
                        ? "newspaper-variant"
                        : item?.tabLabel === "Video"
                        ? "video"
                        : item?.tabLabel === "More"
                        ? "dots-grid"
                        : "home"
                    }
                  />
                ),

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
                      handleUserLogoutEvents();
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
