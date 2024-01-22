import React, { useCallback, useState } from "react";

import {
  Button,
  Platform,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RootStackParamList } from "../../types";
import Theme from "../../style/Theme";
import { TouchableButton } from "../../common";

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

type HomeProps = {
  navigation: HomeScreenNavigationProp;
};

function Home({ navigation }: HomeProps) {
  const [refreshing, setRefreshing] = useState(false);

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
const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    padding: 20,
  },
});
