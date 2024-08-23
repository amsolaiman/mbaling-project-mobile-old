import { StyleSheet } from "react-native";
// components
import { Text, View } from "@/components/custom-native";
import { useParams } from "@/routes/hook";
import { router } from "expo-router";

// ----------------------------------------------------------------------

export default function PostDetailsScreen() {
  const { id } = useParams();

  return (
    <View style={styles.container}>
      <Text onPress={router.back} font="300" style={styles.title}>
        Profile Details
      </Text>
      <Text font="100" style={styles.id}>
        {id}
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
  id: {
    fontSize: 12,
  },
});
