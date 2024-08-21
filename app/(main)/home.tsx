import { StyleSheet } from "react-native";
// components
import { Text, View } from "@/components/custom-default";

// ----------------------------------------------------------------------

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text font="100" style={styles.title}>
        Home
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
