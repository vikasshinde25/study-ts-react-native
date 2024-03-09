import React from "react";

import { Provider } from "react-redux";
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
import { store } from "./src/redux/store";

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
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <AppNavigator />
      </ThemeProvider>
    </Provider>
  );
}
