import { forwardRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button as DefaultButton } from "react-native-paper";
// theme
import Fonts from "@/theme/Fonts";
import Colors from "@/theme/Colors";
//
import { DefaultButtonProps } from "./types";

// ----------------------------------------------------------------------

const Button = forwardRef<View, DefaultButtonProps>((props, ref) => {
  const { style, variant = "contained", label, ...other } = props;

  return (
    <DefaultButton
      style={[styles.button, style]}
      //
      mode={variant}
      labelStyle={styles.buttonLabel}
      {...other}
    >
      <Text
        style={[
          styles.text,
          {
            ...(variant === "outlined" && {
              color: Colors.primary,
            }),
          },
        ]}
      >
        {label}
      </Text>
    </DefaultButton>
  );
});

export default Button;

const styles = StyleSheet.create({
  button: {
    minWidth: 72,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  buttonLabel: {
    marginVertical: 18,
    marginHorizontal: 20,
  },
  text: {
    ...Fonts[500],
    fontSize: 14,
    color: Colors.common.white.main,
  },
});
