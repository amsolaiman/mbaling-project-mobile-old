import { StyleSheet } from "react-native";
// components
import { Text, View } from "@/components/custom-native";

// ----------------------------------------------------------------------

export default function AccountScreen() {
  return (
    <View style={styles.container}>
      <Text font="900" style={styles.title}>
        Account
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
