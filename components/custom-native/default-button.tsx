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
  const { style, variant = "contained", label, ...otherProps } = props;

  return (
    <View ref={ref}>
      <DefaultButton
        onPress={() => {}}
        style={[styles.button, style]}
        //
        mode={variant}
        labelStyle={styles.buttonLabel}
        {...otherProps}
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
    </View>
  );
});

export default Button;

const styles = StyleSheet.create({
  button: {
    minWidth: 72,
    borderRadius: 50,
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
