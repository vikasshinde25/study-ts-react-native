import React, { useCallback, useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { SafeAreaView, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import Theme from "../../style/Theme";
import { AppDispatch } from "../../redux/store";
import { RootStackParamList } from "../../types";
import { ErrorBox, TouchableButton } from "../../common";
import { userLogin } from "../../redux/services/UserServices";
import {
  AuthContainer,
  InputFieldLabel,
  InputField,
  InputFieldView,
  // ButtonContainer,
} from "./AuthStyle";

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Login"
>;

type LoginProps = {
  navigation: LoginScreenNavigationProp;
};

function Login({ navigation }: LoginProps) {
  const dispatch = useDispatch<AppDispatch>();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [loginError, setLoginError] = useState("");
  const [loginloader, setLoginLoader] = useState(false);

  // handle login events
  const handleLoginDetails = (value: string, type: string) => {
    setLoginData({ ...loginData, [type]: value });
  };

  // handle use login events
  const handleUserLoginEvents = () => {
    setLoginLoader(true);

    // email validation
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isEmailValid = !(
      !loginData?.email || emailRegex.test(loginData?.email) === false
    );

    // password validation
    const isPasswordValid = loginData?.password?.length >= 8;

    if (isEmailValid && isPasswordValid) {
      dispatch(userLogin(loginData))
        .unwrap()
        .then(() => {
          navigation.navigate("Home");
          setLoginLoader(false);
        })
        .catch(
          (error: {
            data: { non_field_errors: React.SetStateAction<string>[] };
          }) => {
            setLoginError(error?.data?.non_field_errors?.[0]);
            setLoginLoader(false);
          }
        );
    } else {
      if (!isPasswordValid) {
        setLoginError("Password should have at least 8 characters...");
      } else {
        setLoginError("Oops!... Invalid Credentials.");
      }

      setLoginLoader(false);
    }
  };
  const onPressForgotPassword = () => {
    navigation.navigate("ForgotPassword");
    // Do something about forgot password operation
  };
  const onPressSignUp = () => {
    // Do something about signup operation
  };

  /* ********** Main return statement of this component ********** */
  return (
    <SafeAreaView>
      <AuthContainer>
        <InputFieldLabel>vshinde@buyboxexperts.com</InputFieldLabel>
        <InputFieldLabel>vikas@123</InputFieldLabel>
        <InputFieldView>
          <InputFieldLabel>Email</InputFieldLabel>
          <InputField
            placeholder="Please enter your email"
            placeholderTextColor={Theme.gray99}
            value={loginData?.email}
            autoComplete="email"
            onChangeText={(value) => handleLoginDetails(value, "email")}
          />
        </InputFieldView>
        <InputFieldView>
          <InputFieldLabel>Password</InputFieldLabel>
          <InputField
            secureTextEntry
            placeholder="Please enter your password"
            placeholderTextColor={Theme.gray99}
            value={loginData?.password}
            onChangeText={(value) => handleLoginDetails(value, "password")}
          />
        </InputFieldView>
        <TouchableButton
          buttonText={loginloader ? "Loding....." : "Submit"}
          buttonType="primary"
          onPress={handleUserLoginEvents}
          customStyle={{ marginTop: 0 }}
        />
        {loginError?.length > 0 ? (
          <View>
            <ErrorBox message={loginError} />
          </View>
        ) : null}
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
