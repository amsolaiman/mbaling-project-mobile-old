/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import {
  Text as DefaultText,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
// hooks
import { useColorScheme } from "@/hooks/use-color-scheme";
// theme
import Colors from "./Colors";
// components
import SpinnerOverlay from "@/components/spinner-overlay";

// ----------------------------------------------------------------------

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

type SpinnerProps = {
  loadingState?: boolean;
  loadingCaption?: string;
};

export type TextProps = ThemeProps & DefaultText["props"];

export type ViewProps = ThemeProps &
  SpinnerProps &
  KeyboardAvoidingView["props"];

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
  const {
    style,
    lightColor,
    darkColor,
    loadingState = false,
    loadingCaption,
    ...otherProps
  } = props;

  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={[{ backgroundColor }, style]}
        {...otherProps}
      />

      <SpinnerOverlay state={loadingState} caption={loadingCaption} />
    </>
  );
}
