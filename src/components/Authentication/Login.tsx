import React, { useState } from "react";

import { SafeAreaView } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import Theme from "../../style/Theme";
import { RootStackParamList } from "../../types";
import { TouchableButton } from "../../common";
import {
  AuthContainer,
  InputFieldLabel,
  InputField,
  InputFieldView,
  // ButtonContainer,
} from "./AuthStyle";
import userLogin from "../../store/services/UserServices";

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
    userLogin({ email: userEmail, password: userPassword }).then((response) => {
      if (response?.status === 200) {
        navigation.navigate("Home");
      }
    });
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
        <InputFieldView>
          <InputFieldLabel>Email</InputFieldLabel>
          <InputField
            placeholder="Please enter your email"
            placeholderTextColor={Theme.gray99}
            value={userEmail}
            onChangeText={(event) => {
              setUserEmail(event);
            }}
          />
        </InputFieldView>
        <InputFieldView>
          <InputFieldLabel>Password</InputFieldLabel>
          <InputField
            secureTextEntry
            placeholder="Please enter your password"
            placeholderTextColor={Theme.gray99}
            value={userPassword}
            onChangeText={(event) => {
              setUserPassword(event);
            }}
          />
        </InputFieldView>
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
          buttonType="textBtn-gray"
          onPress={onPressSignUp}
          customStyle={{ marginTop: 0 }}
        />
      </AuthContainer>
    </SafeAreaView>
  );
}

export default Login;
