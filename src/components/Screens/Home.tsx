/* ********** React imports ********** */
import React, { useCallback, useEffect, useState } from "react";

/* ********** Third party imports ********** */
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  Button,
  Platform,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

/* ********** Local files imports ********** */
import Theme from "../../style/Theme";
import { RootStackParamList } from "../../types";
import { TouchableButton } from "../../common";

/* ********** Redux store imports ********** */
import { userMe } from "../../redux/services/UserServices";
import { AppDispatch } from "../../redux/store";

/* ********** Type definations ********** */
type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

type HomeProps = {
  navigation: HomeScreenNavigationProp;
};

/* ********** MAIN FUNCTION START HERE ********** */
function Home({ navigation }: HomeProps) {
  const dispatch = useDispatch<AppDispatch>();
  const [refreshing, setRefreshing] = useState(false);
  const [mobileToken, setMobileToken] = useState("");
  const [webToken, setWebToken] = useState("");

  // handeling the page refresh events
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  // use effect
  useEffect(() => {
    dispatch(userMe());
    let token = "";
    if (Platform.OS === "web") {
      token = localStorage.getItem("token") || "";

      if (token) {
        setWebToken(token || "");
      } else {
        setWebToken("");
      }
    } else {
      AsyncStorage.getItem("token").then((response) => {
        token = response || "";
        console.warn("token", token);
        if (token) {
          setMobileToken(token);
        } else {
          setMobileToken("");
        }
      });
    }
  }, []);

  /* ********** Main return statement of this component ********** */
  return (
    <ScrollView
      contentContainerStyle={styles.scrollView}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={[Theme.baseColor]}
        />
      }
    >
      {/* <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}> */}
      <View>
        <Text> Home Screen </Text>
        <Text> mobileToken is - {mobileToken} </Text>
        <Text> web token is - {webToken} </Text>
        <TouchableButton
          buttonText="Matches"
          buttonType="primary"
          customStyle={{ marginTop: 15 }}
          onPress={() => navigation.navigate("Matches")}
        />
        <TouchableButton
          buttonText="Go back"
          buttonType="primary"
          customStyle={{ marginTop: 15 }}
          onPress={() => navigation.goBack()}
        />
        <TouchableButton
          buttonText="Go back to first screen in stack"
          buttonType="primary"
          customStyle={{ marginTop: 15 }}
          onPress={() => navigation.popToTop()}
        />
      </View>
    </ScrollView>
  );
}

export default Home;
/* ********** MAIN FUNCTION END HERE ********** */

/* ********** Stylesheet ********** */
const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    padding: 20,
  },
});
