import { FC } from "react";
import { Text as DefaultText } from "react-native";
// hooks
import { useThemeColor } from "./use-theme-color";
// theme
import Fonts from "@/theme/Fonts";
// types
import { DefaultTextProps } from "./types";

// ----------------------------------------------------------------------

const Text: FC<DefaultTextProps> = (props) => {
  const { style, lightColor, darkColor, font = "400", ...otherProps } = props;

  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return (
    <DefaultText style={[{ color, ...Fonts[font] }, style]} {...otherProps} />
  );
};

export default Text;
