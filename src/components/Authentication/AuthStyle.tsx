import styled from "styled-components/native";

import Theme from "../../style/Theme";

const AuthContainer = styled.View`
  max-width: 767px;
  padding: 20px;
  margin: 0 auto;
  width: 100%;
`;

const InputFieldView = styled.View`
  margin-bottom: 15px;
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

export { AuthContainer, InputField, InputFieldLabel, InputFieldView };
