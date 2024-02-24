import React, {  useEffect, useState } from "react";

import { Platform } from "react-native";
import { useDispatch } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Theme from "../style/Theme";
import BottomTabNavigator from "./BottomTabNavigator";
import { AppDispatch } from "../redux/store";
import { RootStackParamList } from "../types";
import { userMe } from "../redux/services/UserServices";
import { ForgotPassword, Login } from "../components/Authentication";

const RootStack = createNativeStackNavigator<RootStackParamList>();

function AppNavigator() {
  const dispatch = useDispatch<AppDispatch>();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobileToken, setMobileToken] = useState("");
  const [webToken, setWebToken] = useState("");

  // // get token from async storage
  // const getTokenFromAsynStorage = useCallback(async () => {
  //   const token = await AsyncStorage.getItem("token").then((response) => {
  //     return response;
  //   });

  //   return token;
  // }, []);

  // use effect
  useEffect(() => {
    dispatch(userMe());
    let token = "";
    if (Platform.OS === "web") {
      token = localStorage.getItem("token") || "";
      if (token) {
        setIsLoggedIn(true);
        setWebToken(token);
      } else {
        setIsLoggedIn(false);
        setWebToken("");
      }
    } else {
      AsyncStorage.getItem("token").then((response) => {
        token = response || "";
        console.warn("token", token);
        if (token) {
          setIsLoggedIn(true);
          setMobileToken(token);
        } else {
          setIsLoggedIn(false);
          setMobileToken("");
        }
      });
    }
  }, []);

  console.log("isLoggedIn", isLoggedIn);

  /* ********** Main return statement of this component ********** */
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Login">
        {isLoggedIn ? (
          // Screens for logged in users
          <>
            <RootStack.Screen
              name="BottomTabNavigator"
              component={BottomTabNavigator}
              options={{ headerShown: false }}
            />

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
          </>
        ) : (
          // Auth screens
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
        )}
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
