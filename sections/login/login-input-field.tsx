import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Controller, useFormContext } from "react-hook-form";
import { TextInput, TextInputProps } from "react-native-paper";

// ----------------------------------------------------------------------

interface Props extends TextInputProps {
  name: string;
}

export default function LoginInputField({ name, label }: Props) {
  const { control } = useFormContext();

  const [onFocus, setFocus] = useState<boolean>(false);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <View style={styles.container}>
          <TextInput
            {...field}
            value={field.value}
            onChangeText={field.onChange}
            style={styles.input}
            //
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            //
            textColor="#fff"
            underlineColor="#fff"
            activeUnderlineColor="#fff"
          />

          {!onFocus && !field.value && <Text style={styles.label}>{label}</Text>}
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "70%",
    height: 48,
    alignSelf: "center",
    textAlign: "center",
    backgroundColor: "transparent",
  },
  label: {
    paddingBottom: 2,
    position: "absolute",
    color: "rgba(255,255,255,0.8)",
    fontSize: 16,
  },
});
