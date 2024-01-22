import React from "react";

import styled from "styled-components/native";
import Theme from "../style/Theme";

interface LoginErrorMsgProps {
  message: string | null;
}

function ErrorBox({ message }: LoginErrorMsgProps) {
  /* ********** Main return statement of this component ********** */
  return (
    <ErrorMsgStyle>
      <MessageBox>
        <MessageText>{message}</MessageText>
      </MessageBox>
    </ErrorMsgStyle>
  );
}

export default ErrorBox;

const ErrorMsgStyle = styled.View`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  border: 1px solid ${Theme.darkRed};
  border-radius: 16px;

  margin-top: 15px;
`;
const MessageBox = styled.View`
  width: 100%;
  padding: 5px 10px 0px 10px;
`;
const MessageText = styled.Text`
  color: ${Theme.red};
  font-family: ${Theme.baseFontFamily};
`;
