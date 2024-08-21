import { Link, Stack } from "expo-router";
import { StyleSheet } from "react-native";
// components
import { Text, View } from "@/components/custom-default";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!", headerShown: false }} />

      <View style={styles.container}>
        <Text font="700" style={styles.title}>
          This screen doesn't exist.
        </Text>

        <Link href="/(main)/home" style={styles.link}>
          <Text style={styles.linkText}>Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});
