/* ********** React imports ********** */
import React, { useCallback, useState } from "react";

/* ********** Third party imports ********** */

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
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

/* ********** Type definations ********** */
type VideoScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Video"
>;

type VideoProps = {
  navigation: VideoScreenNavigationProp;
};

/* ********** MAIN FUNCTION START HERE ********** */
function Video({ navigation }: VideoProps) {
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
        <Text> Video Screen </Text>

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

export default Video;
/* ********** MAIN FUNCTION END HERE ********** */

/* ********** Stylesheet ********** */
const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    padding: 20,
  },
});
