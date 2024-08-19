import { useState } from "react";
import { StyleSheet } from "react-native";
import { IconButton, MD3Colors, TextInput } from "react-native-paper";
// theme
import Fonts from "@/theme/Fonts";
// components
import { Text, View } from "@/theme/Components";

// ----------------------------------------------------------------------

export default function SearchScreen() {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
  title: {
    fontSize: 48,
    ...Fonts[700],
  },
});
