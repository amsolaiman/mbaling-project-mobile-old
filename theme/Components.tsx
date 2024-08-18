/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import { Text as DefaultText, View as DefaultView } from "react-native";
// hooks
import { useColorScheme } from "@/hooks/useColorScheme";
// theme
import Colors from "./Colors";

// ----------------------------------------------------------------------

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText["props"];

export type ViewProps = ThemeProps & DefaultView["props"];

// ----------------------------------------------------------------------

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme() ?? "light";

  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

// ----------------------------------------------------------------------

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;

  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;

  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

// const getFontWeight = (style: TextStyle | undefined): string => {
//   const isNumeric = (value: unknown): value is string => {
//     return (
//       typeof value === "number" ||
//       (typeof value === "string" && !isNaN(Number(value)))
//     );
//   };

//   const fontWeight = isNumeric(style?.fontWeight) ? style?.fontWeight : "400";

//   return fontWeight;
// };
