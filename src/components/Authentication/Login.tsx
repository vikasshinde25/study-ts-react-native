import React, { useState } from "react";
import { SafeAreaView, View } from "react-native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import {
  AuthStyle,
  AuthContainer,
  InputFieldLabel,
  InputField,
  // ButtonContainer,
} from "./AuthStyle";
import { TouchableButton } from "../../common";

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Login"
>;

type LoginProps = {
  navigation: LoginScreenNavigationProp;
};

function Login({ navigation }: LoginProps) {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const onPressLogin = () => {
    navigation.navigate("Home");
  };
  const onPressForgotPassword = () => {
    navigation.navigate("ForgotPassword");
    // Do something about forgot password operation
  };
  const onPressSignUp = () => {
    // Do something about signup operation
  };

  return (
    <SafeAreaView>
      <AuthContainer>
        <View style={AuthStyle.inputView}>
          <InputFieldLabel>Email</InputFieldLabel>
          <InputField
            style={AuthStyle.inputField}
            placeholder="Please enter your email"
            value={userEmail}
            onChangeText={(event) => {
              setUserEmail(event);
            }}
          />
        </View>
        <View style={AuthStyle.inputView}>
          <InputFieldLabel>Password</InputFieldLabel>
          <InputField
            style={AuthStyle.inputField}
            secureTextEntry
            placeholder="Please enter your password"
            value={userPassword}
            onChangeText={(event) => {
              setUserPassword(event);
            }}
          />
        </View>
        <TouchableButton
          buttonText="Login"
          buttonType="primary"
          onPress={onPressLogin}
          customStyle={{ marginTop: 0 }}
        />
        <TouchableButton
          buttonText="Forgot Password"
          buttonType="transparent"
          onPress={onPressForgotPassword}
          customStyle={{ marginTop: 15 }}
        />

        <TouchableButton
          buttonText="Do not have an account? Sign Up"
          buttonType="textBtn"
          onPress={onPressSignUp}
          customStyle={{ marginTop: 0 }}
        />
      </AuthContainer>
    </SafeAreaView>
  );
}

export default Login;
