import React, { useEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform, View } from "react-native";
import { useDispatch } from "react-redux";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import Theme from "../style/Theme";
import { RootStackParamList } from "../types";

import { Home, Matches, More, News, Video } from "../components/Screens";
import { Icon, TouchableButton } from "../common";
import { AppDispatch } from "../redux/store";
import { BottomTabConstant } from "../constants";
import { userLogout, userMe } from "../redux/services/UserServices";

const BottomTab = createBottomTabNavigator();

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

  // use effect
  useEffect(() => {
    let token = "";
    if (Platform.OS === "web") {
      token = localStorage.getItem("token") || "";
      if (token) {
        dispatch(userMe());
      } else {
        navigation.navigate("Login");
        setLougOutLoader(false);
        setLogOutError("");
      }
    } else {
      AsyncStorage.getItem("token").then((response) => {
        token = response || "";
        if (token) {
          dispatch(userMe());

          navigation.navigate("Login");
        } else {
          navigation.navigate("Login");
          setLougOutLoader(false);
          setLogOutError("");
        }
      });
    }
  }, [dispatch, navigation]);
  console.log("lougOutError", lougOutError);
  console.log("lougOutLoader", lougOutLoader);

  // delete async storage
  const deleteAsyncStorage = async () => {
    try {
      await AsyncStorage.clear();
      // await AsyncStorage.removeItem("token");
      navigation.navigate("Login");
    } catch (error) {
      return error;
    }
    return null;
  };

  // handle delete storage activity
  const handleDeleteStorageActivity = () => {
    if (Platform.OS === "web") {
      localStorage.removeItem("token");
    } else {
      deleteAsyncStorage();
    }
  };

  // handle user logout event
  const handleUserLogoutEvents = () => {
    dispatch(userLogout())
      .unwrap()
      .then((response: any) => {
        console.warn("response", response);

        handleDeleteStorageActivity();

        setLougOutLoader(false);
        setLogOutError("");
      });
    // .catch(
    //   (error: {
    //     data: { non_field_errors: React.SetStateAction<string>[] };
    //   }) => {
    //     setLougOutLoader(false);
    //     setLogOutError(error?.data?.non_field_errors?.[0]);
    //   }
    // );
  };

  // get tab component
  const getTabComponent = (tabLabel: string) => {
    switch (tabLabel) {
      case "Home":
        return Home;
      case "Matches":
        return Matches;
      case "News":
        return News;
      case "Video":
        return Video;
      case "More":
        return More;
      default:
        return Home;
    }
  };

  // get tab component
  const getTabIcon = (tabLabel: string) => {
    switch (tabLabel) {
      case "Home":
        return "home";
      case "Matches":
        return "cricket";
      case "News":
        return "newspaper-variant";
      case "Video":
        return "video";
      case "More":
        return "dots-grid";
      default:
        return "";
    }
  };

  const displayTabIcon = (tabLabel: string) => {
    return (
      <Icon size="large" color={Theme.white} name={getTabIcon(tabLabel)} />
    );
  };

  const displayLogoutbutton = () => {
    return (
      <TouchableButton
        buttonText="Logout"
        buttonType="textBtn-white"
        onPress={() => {
          handleUserLogoutEvents();
        }}
        customStyle={{ marginTop: 0 }}
      />
    );
  };

  /* ********** Main return statement of this component ********** */
  return (
    <View style={{ backgroundColor: Theme.baseColor, flex: 1 }}>
      <BottomTab.Navigator
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
            <BottomTab.Screen
              name={item?.tabLabel}
              key={item?.tabLabel}
              component={getTabComponent(item?.tabLabel)}
              options={{
                tabBarIcon: () => displayTabIcon(item?.tabLabel),

                headerStyle: {
                  backgroundColor: Theme.baseColor,
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                  fontWeight: "bold",
                },

                headerRight: () => displayLogoutbutton(),
              }}
            />
          );
        })}
      </BottomTab.Navigator>
    </View>
  );
}

export default BottomTabNavigator;
