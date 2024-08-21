import { StyleSheet } from "react-native";
// components
import { Text, View } from "@/components/custom-default";

// ----------------------------------------------------------------------

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <Text font="700" style={styles.title}>
        Search
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 48,
  },
});
