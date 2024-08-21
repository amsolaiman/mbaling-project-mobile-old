import { Pressable, StyleSheet } from "react-native";
import { router } from "expo-router";
// components
import { Text, View } from "@/components/custom-default";

// ----------------------------------------------------------------------

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.navigate("/")}>
        <Text font="400" style={styles.title}>
          Settings
        </Text>
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
  },
});
