import { StyleSheet } from "react-native";
// components
import { Text, View } from "@/components/custom-default";

// ----------------------------------------------------------------------

export default function ManageScreen() {
  return (
    <View style={styles.container}>
      <Text font="300" style={styles.title}>
        Manage
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
