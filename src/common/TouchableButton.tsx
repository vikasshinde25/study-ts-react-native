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

const ButtonStyle = styled.Pressable<ButtonStyleProps>`
  padding: 9px 20px;
  font-family: ${Theme.baseFontFamily};
  font-size: ${Theme.regular};
  color: ${Theme.black};
  border-radius: 5px;
  text-align: center;
  min-height: 40px;
  border: 1px solid;
  width: fit-content;

  border-color: ${(props) => {
    switch (props.buttonType) {
      case "textBtn-gray":
        return "transparent";
      default:
        return Theme.baseColor;
    }
  }};
  background-color: ${(props) => {
    switch (props.buttonType) {
      case "primary":
        return Theme.baseColor;
      case "bg-white":
        return Theme.white;
      default:
        return "transparent";
    }
  }};
`;
const ButtonLabelStyle = styled.Text<ButtonLabelStyleProps>`
  text-align: center;
  font-family: ${(props) => {
    switch (props.buttonType) {
      case "primary":
        return Theme.baseMediumFontFamily;
      default:
        return Theme.baseFontFamily;
    }
  }};

  color: ${(props) => {
    switch (props.buttonType) {
      case "primary":
        return Theme.white;
      case "textBtn-white":
        return Theme.white;
      case "textBtn-gray":
        return Theme.gray99;
      default:
        return Theme.black;
    }
  }};
`;

export default TouchableButton;
