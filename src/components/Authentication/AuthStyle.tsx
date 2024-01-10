import { StyleSheet } from "react-native";
import styled from "styled-components/native";

import Theme from "../../style/Theme";

const AuthContainer = styled.View`
  max-width: 767px;
  padding: 20px;
  margin: 0 auto;
  width: 100%;
`;

const InputFieldLabel = styled.Text`
  color: ${Theme.black};
  font-size: ${Theme.regular};
  font-family: ${Theme.baseFontFamily};
  font-weight: 500;
  margin-bottom: 5px;
`;

const InputField = styled.TextInput`
  position: relative;
  color: ${Theme.black};
  border: 1px solid ${Theme.gray45};
  font-family: ${Theme.baseFontFamily};
  font-size: ${Theme.small};
  border-radius: 5px;
  padding: 5px 10px;
  width: 100%;
  height: 40px;
  background-color: ${Theme.gray8};
`;

const AuthStyle = StyleSheet.create({
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

export { AuthStyle, AuthContainer, InputField, InputFieldLabel };
