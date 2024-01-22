import React, { useState } from "react";

import { SafeAreaView, Text, View } from "react-native";

import Theme from "../../style/Theme";
import { ErrorBox, TouchableButton } from "../../common";
import {
  AuthContainer,
  InputField,
  InputFieldLabel,
  InputFieldView,
} from "./AuthStyle";

function ForgotPassword() {
  const [passwordData, setPasswordData] = useState({
    password: "vikas@123",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [loginloader, setLoginLoader] = useState(false);

  // handle login events
  const handleLoginDetails = (value: string, type: string) => {
    setPasswordData({ ...passwordData, [type]: value });
  };

  // handle use login events
  const handleUserLoginEvents = () => {
    setLoginLoader(true);
    // password validation
    const passowrd = passwordData?.password;
    const confirmPassowrd = passwordData?.confirmPassword;

    const isPasswordValid = passwordData?.password?.length >= 8;
    const isConformPasswordValid = passwordData?.confirmPassword?.length >= 8;

    if (
      passowrd === confirmPassowrd &&
      isPasswordValid &&
      isConformPasswordValid
    ) {
      setLoginError("");
    } else {
      if (!isPasswordValid) {
        setLoginError("Password should have at least 8 characters...");
      } else {
        setLoginError("Oops!... Invalid Credentials.");
      }

      setLoginLoader(false);
    }
  };

  const onPressSignUp = () => {
    // Do something about signup operation
  };

  /* ********** Main return statement of this component ********** */
  return (
    <SafeAreaView>
      <AuthContainer>
        <InputFieldView>
          <InputFieldLabel>Password</InputFieldLabel>
          <InputField
            secureTextEntry={!showPassword}
            placeholder="Please enter your password"
            placeholderTextColor={Theme.gray99}
            value={passwordData?.password}
            onChangeText={(value) => handleLoginDetails(value, "password")}
          />
        </InputFieldView>
        <TouchableButton
          buttonText={showPassword ? "Hide Password" : "Show Password"}
          buttonType="textBtn-gray"
          onPress={() => setShowPassword(!showPassword)}
          customStyle={{ marginTop: 0 }}
        />
        <InputFieldView>
          <InputFieldLabel>Confirm Password</InputFieldLabel>
          <InputField
            secureTextEntry
            placeholder="Please reenter above password"
            placeholderTextColor={Theme.gray99}
            value={passwordData?.confirmPassword}
            onChangeText={(value) =>
              handleLoginDetails(value, "confirmPassword")
            }
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
          buttonText="Do not have an account? Sign Up"
          buttonType="textBtn-gray"
          onPress={onPressSignUp}
          customStyle={{ marginTop: 0 }}
        />
      </AuthContainer>
    </SafeAreaView>
  );
}

export default ForgotPassword;
