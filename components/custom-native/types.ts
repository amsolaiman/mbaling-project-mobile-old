import { KeyboardAvoidingView, Text } from "react-native";
import { ButtonProps } from "react-native-paper";

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

type ModifiedButtonProp = Omit<
  ButtonProps,
  "mode" | "children" | "icon" | "loading"
>;

export type DefaultTextProps = ThemeProps & Text["props"] & FontProps;

export type DefaultViewProps = ThemeProps &
  KeyboardAvoidingView["props"] &
  SpinnerProps;

export type DefaultButtonProps = ModifiedButtonProp & {
  label: string;
  variant?: "contained" | "outlined";
};
