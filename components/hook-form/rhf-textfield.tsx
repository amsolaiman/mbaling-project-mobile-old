import { StyleSheet } from "react-native";
import { Controller, useFormContext } from "react-hook-form";
import { TextInput, TextInputProps } from "react-native-paper";

// ----------------------------------------------------------------------

type Props = TextInputProps & {
  name: string;
};

const RHFTextField: React.FC<Props> = ({ name, style, ...other }) => {
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
          //
          {...other}
        />
      )}
    />
  );
};

export default RHFTextField;

const styles = StyleSheet.create({
  input: {
    backgroundColor: "transparent",
  },
});
