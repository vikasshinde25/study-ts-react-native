import React, { useCallback, useState } from "react";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  Button,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { RootStackParamList } from "../../types";
import { TouchableButton } from "../../common";
import Theme from "../../style/Theme";

type MatchesScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Matches"
>;

type MatchesProps = { navigation: MatchesScreenNavigationProp };

function Matches({ navigation }: MatchesProps) {
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
      <View>
        <Text>Matches Screen</Text>
        <TouchableButton
          buttonText="News"
          buttonType="primary"
          customStyle={{ marginTop: 15 }}
          onPress={() => navigation.navigate("News")}
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

export default Matches;
const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    padding: 20,
  },
});
