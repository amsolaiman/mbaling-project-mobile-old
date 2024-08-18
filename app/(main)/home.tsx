import { StyleSheet, TextInput } from "react-native";
// theme
import Fonts from "@/theme/Fonts";
// components
import { Text, View } from "@/theme/Components";
import { useState } from "react";

// ----------------------------------------------------------------------

export default function HomeScreen() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <TextInput
        style={[
          styles.input,
          {
            borderBottomWidth: isFocused ? 2 : 1,
          },
        ]}
        placeholder={!isFocused ? "username" : ""}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 48,
    ...Fonts[100],
  },
  input: {
    width: "70%",
    textAlign: "center",
    backgroundColor: "transparent",
    paddingVertical: 2,
    paddingHorizontal: 4,
    borderBottomColor: "red",
    borderBottomWidth: 1,
  },
});
