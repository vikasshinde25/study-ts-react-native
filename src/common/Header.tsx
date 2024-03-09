import React, { useEffect } from "react";

import { Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

type HeaderProps = { title: string };

function Header({ title }: HeaderProps) {
  const getUser = async () => {
    try {
      const token = (await AsyncStorage.getItem("token")) || "";
      const tokenKey = JSON.parse(token);
      console.log("tokenKey", tokenKey);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  /* ********** Main return statement of this component ********** */
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
}

export default Header;
