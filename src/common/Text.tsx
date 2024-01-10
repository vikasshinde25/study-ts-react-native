// import React from "react";

// import styled from "styled-components";
// import { scaleFont } from "../style/Mixins";

// type TextProps = {
//   copilot: object;
//   children: object;
// };

// function TextStyle({ copilot, children, ...props }: TextProps) {
//   return (
//     <Text {...props} {...copilot}>
//       {children}
//     </Text>
//   );
// }
// export default TextStyle;

// const Text = styled.Text`
//   ${({
//     title,
//     medium,
//     small,
//     large,
//     heading,
//     semiMedium,
//     semiLarge,
//   }: {
//     title: boolean;
//     medium: boolean;
//     small: boolean;
//     large: boolean;
//     heading: boolean;
//     semiMedium: boolean;
//     semiLarge: boolean;
//   }) => {
//     switch (true) {
//       case title:
//         return `font-size: ${scaleFont(24)}px`;

//       case heading:
//         return `font-size: ${scaleFont(34)}px`;

//       case semiLarge:
//         return `font-size: ${scaleFont(22)}px`;

//       case large:
//         return `font-size: ${scaleFont(20)}px`;

//       case semiMedium:
//         return `font-size: ${scaleFont(18)}px`;

//       case medium:
//         return `font-size: ${scaleFont(16)}px`;

//       case small:
//         return `font-size: ${scaleFont(13)}px`;

//       default:
//         return `font-size: ${scaleFont(14)}px`;
//     }
//   }}
// `;
