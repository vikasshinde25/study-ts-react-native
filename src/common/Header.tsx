import React, { useEffect, useState } from "react";

import { Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";

import { userMe } from "../redux/services/UserServices";
import { AppDispatch, RootState, useAppSelector } from "../redux/store";

type HeaderProps = { title: string };

function Header({ title }: HeaderProps) {
  const dispatch = useDispatch<AppDispatch>();

  const getUser = async () => {
    try {
      const token = (await AsyncStorage.getItem("token")) || "";
      const tokenKey = JSON.parse(token);
      console.log("tokenKey", tokenKey);

      if (tokenKey) {
        dispatch(userMe());
      } else {
      }
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
