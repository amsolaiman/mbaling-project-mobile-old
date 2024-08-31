import { forwardRef } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
// hooks
import { useThemeColor } from "./use-theme-color";
// component
import SpinnerOverlay from "../spinner-overlay";
//
import { DefaultViewProps } from "./types";

// ----------------------------------------------------------------------

const View = forwardRef<KeyboardAvoidingView, DefaultViewProps>(
  (props, ref) => {
    const {
      style,
      lightColor,
      darkColor,
      loadingState = false,
      loadingCaption,
      ...other
    } = props;

    const backgroundColor = useThemeColor(
      { light: lightColor, dark: darkColor },
      "background"
    );

    return (
      <>
        <KeyboardAvoidingView
          ref={ref}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={[{ backgroundColor }, style]}
          {...other}
        />

        <SpinnerOverlay state={loadingState} caption={loadingCaption} />
      </>
    );
  }
);

export default View;
