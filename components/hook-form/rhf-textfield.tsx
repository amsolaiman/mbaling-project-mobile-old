import { StyleSheet, Text, View } from "react-native";
import { Controller, useFormContext } from "react-hook-form";
import { TextInput, TextInputProps } from "react-native-paper";
// hooks
import { useBoolean } from "@/hooks/use-boolean";
// theme
import Colors from "@/theme/Colors";

// ----------------------------------------------------------------------

type Props = TextInputProps & {
  name: string;
};

export default function RHFTextField({ name, style, ...other }: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextInput
          {...field}
          value={field.value}
          onChangeText={field.onChange}
          style={[styles.input, style]}
          {...other}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "transparent",
  },
});
