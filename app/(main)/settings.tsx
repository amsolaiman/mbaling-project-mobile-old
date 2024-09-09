import { Pressable, StyleSheet } from "react-native";
// @expo
import { router } from "expo-router";
// auth
import { useAuthContext } from "@/auth/hooks";
// components
import { Text, View } from "@/components/custom-native";

// ----------------------------------------------------------------------

export default function SettingsScreen() {
  const { logout } = useAuthContext();

  const handleLogout = async () => {
    try {
      await logout();
      router.replace("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={handleLogout}>
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
