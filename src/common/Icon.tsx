import React from "react";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const IconSizes = {
  small: 13,
  medium: 18,
  large: 23,
  extraLarge: 27,
};

type IconSizeProps = {
  iconSizes: keyof typeof IconSizes;
};

export interface IconProps {
  size: IconSizeProps["iconSizes"];
  name: string;
  color: string;
}

function Icon({ size, name, color }: IconProps) {
  return (
    <MaterialCommunityIcons name={name} color={color} size={IconSizes[size]} />
  );
}

export default Icon;
