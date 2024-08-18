import { Pressable, StyleSheet } from "react-native";
import { router } from "expo-router";
// theme
import Fonts from "@/theme/Fonts";
import Colors from "@/theme/Colors";
// components
import { Text, View } from "@/theme/Components";
import { LogoVertical } from "@/components/logo";

// ----------------------------------------------------------------------

export default function LoginView() {
  return (
    <View style={styles.container}>
      <LogoVertical disabledLink color="dark" style={{ marginBottom: 48 }} />

      <View style={{ borderRadius: 50, overflow: "hidden" }}>
        <Pressable
          onPress={() => router.navigate("/(main)/home")}
          style={styles.button}
          android_ripple={{
            color: "rgba(0,0,0,0.05)",
            borderless: false,
          }}
        >
          <Text style={styles.title}>log-in</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary,
  },
  button: {
    width: 100,
    height: 28,
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    color: Colors.primary,
    textAlign: "center",
    fontSize: 14,
    ...Fonts[500],
  },
});
