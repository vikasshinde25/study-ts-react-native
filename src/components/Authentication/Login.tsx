import React, { useState } from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";

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
    // Do something about login operation
  };
  const onPressForgotPassword = () => {
    navigation.navigate("ForgotPassword");
    // Do something about forgot password operation
  };
  const onPressSignUp = () => {
    // Do something about signup operation
  };

  return (
    <SafeAreaView style={loginStyles.loginContainer}>
      <View style={loginStyles.inputView}>
        <Text style={loginStyles.inputFieldLabel}>Email</Text>
        <TextInput
          style={loginStyles.inputField}
          placeholder="Please enter your email"
          value={userEmail}
          onChangeText={(event) => {
            setUserEmail(event);
          }}
        />
      </View>
      <View style={loginStyles.inputView}>
        <Text style={loginStyles.inputFieldLabel}>Password</Text>
        <TextInput
          style={loginStyles.inputField}
          secureTextEntry
          placeholder="Please enter your password"
          value={userPassword}
          onChangeText={(event) => {
            setUserPassword(event);
          }}
        />
      </View>
      <TouchableOpacity onPress={onPressLogin} style={loginStyles.loginBtn}>
        <Text>LOGIN </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressForgotPassword}>
        <Text>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressSignUp}>
        <Text>Do not have an account? Sign Up.</Text>
      </TouchableOpacity>
      <Button
        title="Go to Home screen"
        onPress={() => navigation.navigate("Home")}
      />
    </SafeAreaView>
  );
}

export default Login;
const loginStyles = StyleSheet.create({
  loginContainer: {
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    maxWidth: 767,
    padding: 20,
    marginTop: 0,
    marginRight: "auto",
    marginBottom: 0,
    marginLeft: "auto",
    width: "100%",
  },

  inputView: {
    width: "100%",
    marginBottom: 20,
  },
  inputFieldLabel: {
    marginBottom: 5,
  },
  inputField: {
    color: "black",
    borderRadius: 5,
    borderStyle: "solid",
    borderWidth: 1,
    paddingTop: 5,
    paddingRight: 10,
    paddingBottom: 5,
    paddingLeft: 10,
  },
  forgotAndSignUpText: {
    color: "black",
    fontSize: 12,
  },
  loginBtn: {
    width: "100%",
    fontSize: 24,
    fontWeight: "bold",
    backgroundColor: "#fb5b5a",
    borderRadius: 10,
    paddingTop: 10,
    paddingRight: 20,
    paddingBottom: 10,
    paddingLeft: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
