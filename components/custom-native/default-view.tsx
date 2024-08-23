import { KeyboardAvoidingView, Platform } from "react-native";
// hooks
import { useThemeColor } from "./use-theme-color";
// component
import SpinnerOverlay from "../spinner-overlay";
//
import { DefaultViewProps } from "./types";

// ----------------------------------------------------------------------

const View: React.FC<DefaultViewProps> = (props) => {
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
};

export default View;
