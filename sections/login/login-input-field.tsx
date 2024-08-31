import { StyleSheet, View } from "react-native";
import { Controller, useFormContext } from "react-hook-form";
import { TextInput, TextInputProps } from "react-native-paper";
// hooks
import { useBoolean } from "@/hooks/use-boolean";
// theme
import Colors from "@/theme/Colors";
// components
import { Text } from "@/components/custom-native";

// ----------------------------------------------------------------------

type Props = TextInputProps & {
  name: string;
};

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
            textColor={Colors.common.white.main}
            underlineColor={Colors.common.white.main}
            activeUnderlineColor={Colors.common.white.main}
          />

          {!onFocus.value && !field.value && (
            <Text font="400" style={styles.label}>
              {label}
            </Text>
          )}
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
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
    color: Colors.common.white[800],
    fontSize: 16,
    pointerEvents: "none",
    zIndex: 0,
  },
});
