import { Link, Stack } from "expo-router";
import { StyleSheet } from "react-native";
// components
import { LogoVertical } from "@/components/logo";
import { Text, View } from "@/components/custom-native";
import Colors from "@/theme/Colors";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!", headerShown: false }} />

      <View style={styles.container}>
        <LogoVertical color="primary" />

        <Text font="700" style={styles.title}>
          Sorry, page not found!
        </Text>

        <Link href="/(main)/home" style={styles.link}>
          <Text style={styles.linkText}>Go to Home</Text>
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
    marginTop: 48,
    fontSize: 20,
  },
  link: {
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: Colors.primary,
  },
});
