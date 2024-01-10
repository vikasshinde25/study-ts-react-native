import styled from "styled-components/native";

import Theme from "../style/Theme";

type ButtonProps = {
  buttonText: string;
  buttonType: string;
  customStyle: object | null;
  onPress(): void;
};

type ButtonStyleProps = {
  buttonType: string;
};
type ButtonLabelStyleProps = {
  buttonType: string;
};

function TouchableButton({
  buttonText,
  buttonType,
  customStyle,
  onPress,
}: ButtonProps) {
  return (
    <ButtonStyle onPress={onPress} style={customStyle} buttonType={buttonType}>
      <ButtonLabelStyle buttonType={buttonType}>{buttonText}</ButtonLabelStyle>
    </ButtonStyle>
  );
}

const ButtonStyle = styled.TouchableOpacity<ButtonStyleProps>`
  padding: 9px 20px;
  font-family: ${Theme.baseFontFamily};
  font-size: ${Theme.regular};
  color: ${Theme.black};
  font-weight: 500;
  width: 100%;
  border-radius: 5px;
  text-align: center;
  min-height: 40px;
  border: 1px solid;

  border-color: ${(props) => {
    switch (props.buttonType) {
      case "textBtn":
        return "transparent";
      default:
        return Theme.baseColor;
    }
  }};
  background-color: ${(props) => {
    switch (props.buttonType) {
      case "primary":
        return Theme.baseColor;
      case "transparent":
        return "transparent";
      case "textBtn":
        return "transparent";
      default:
        return Theme.white;
    }
  }};
`;
const ButtonLabelStyle = styled.Text<ButtonLabelStyleProps>`
  text-align: center;

  color: ${(props) => {
    switch (props.buttonType) {
      case "primary":
        return Theme.white;
      default:
        return Theme.black;
    }
  }};
`;

export default TouchableButton;
