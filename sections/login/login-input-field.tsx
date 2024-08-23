import { StyleSheet, Text, View } from "react-native";
import { Controller, useFormContext } from "react-hook-form";
import { TextInput, TextInputProps } from "react-native-paper";
// hooks
import { useBoolean } from "@/hooks/use-boolean";

// ----------------------------------------------------------------------

interface Props extends TextInputProps {
  name: string;
}

export default function LoginInputField({
  name,
  label,
  secureTextEntry = false,
}: Props) {
  const { control } = useFormContext();

  const onFocus = useBoolean(false);

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
            secureTextEntry={secureTextEntry}
            style={styles.input}
            //
            onFocus={onFocus.onTrue}
            onBlur={onFocus.onFalse}
            //
            textColor="#FFF"
            underlineColor="#FFF"
            activeUnderlineColor="#FFF"
          />

          {!onFocus.value && !field.value && (
            <Text style={styles.label}>{label}</Text>
          )}
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
    width: "60%",
    height: 48,
    alignSelf: "center",
    textAlign: "center",
    backgroundColor: "transparent",
    zIndex: 1,
  },
  label: {
    paddingBottom: 2,
    position: "absolute",
    color: "rgba(255,255,255,0.8)",
    fontSize: 16,
    pointerEvents: "none",
    zIndex: 0,
  },
});
