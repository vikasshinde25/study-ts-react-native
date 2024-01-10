import React from "react";

import { ThemeProvider } from "styled-components";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import AppNavigator from "./src/navigation/AppNavigator";
import Theme from "./src/style/Theme";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ThemeProvider theme={Theme}>
      <AppNavigator />
    </ThemeProvider>
  );
}
