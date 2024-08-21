import { KeyboardAvoidingView, Text } from "react-native";

// ----------------------------------------------------------------------

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

type FontProps = {
  font?: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
};

type SpinnerProps = {
  loadingState?: boolean;
  loadingCaption?: string;
};

export type DefaultTextProps = ThemeProps & Text["props"] & FontProps;

export type DefaultViewProps = ThemeProps &
  KeyboardAvoidingView["props"] &
  SpinnerProps;
