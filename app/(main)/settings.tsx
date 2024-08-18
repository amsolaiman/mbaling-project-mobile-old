import { Pressable, StyleSheet } from "react-native";
import { router } from "expo-router";
// theme
import Fonts from "@/theme/Fonts";
// components
import { Text, View } from "@/theme/Components";

// ----------------------------------------------------------------------

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.navigate("/")}>
        <Text style={styles.title}>Settings</Text>
      </Pressable>
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
    ...Fonts[400],
  },
});
