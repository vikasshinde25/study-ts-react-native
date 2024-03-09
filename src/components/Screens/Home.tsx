/* ********** React imports ********** */
import React, { useCallback, useState } from "react";

/* ********** Third party imports ********** */
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useDispatch } from "react-redux";
import {
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
import { AppDispatch, RootState, useAppSelector } from "../../redux/store";
import customerDetails from "../../redux/services/CustomerServices";

/* ********** Redux store imports ********** */

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
  const userState = useAppSelector((state: RootState) => state?.userState);
  const userData = userState?.userData;
  // console.warn(userData);
  const [refreshing, setRefreshing] = useState(false);

  // handeling the page refresh events
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
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
        <Text>
          {userData?.first_name} {userData?.last_name}
        </Text>
        <TouchableButton
          buttonText="Redux"
          buttonType="primary"
          customStyle={{ marginTop: 15 }}
          onPress={() => dispatch(customerDetails("CMORug2"))}
        />
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
