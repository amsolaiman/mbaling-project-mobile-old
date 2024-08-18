import { StyleSheet } from "react-native";
// theme
import Fonts from "@/theme/Fonts";
// components
import { Text, View } from "@/theme/Components";

// ----------------------------------------------------------------------

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search</Text>
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
    ...Fonts[700],
  },
});
