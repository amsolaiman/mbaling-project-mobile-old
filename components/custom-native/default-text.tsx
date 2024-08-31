import { forwardRef } from "react";
import { Text as DefaultText } from "react-native";
// hooks
import { useThemeColor } from "./use-theme-color";
// theme
import Fonts from "@/theme/Fonts";
//
import { DefaultTextProps } from "./types";

// ----------------------------------------------------------------------

const Text = forwardRef<DefaultText, DefaultTextProps>((props, ref) => {
  const { style, lightColor, darkColor, font = "400", ...other } = props;

  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return (
    <DefaultText
      ref={ref}
      style={[{ color, ...Fonts[font] }, style]}
      {...other}
    />
  );
});

export default Text;
