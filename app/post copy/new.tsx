import { StyleSheet } from "react-native";
import { router } from "expo-router";
// components
import { Text, View } from "@/components/custom-native";

// ----------------------------------------------------------------------

export default function PostNewScreen() {
  return (
    <View style={styles.container}>
      <Text onPress={router.back} font="300" style={styles.title}>
        Create Post
      </Text>
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
