import { Pressable, StyleSheet, View } from "react-native";
import { Iconify } from "react-native-iconify";
// @expo
import { router } from "expo-router";
// theme
import Colors from "@/theme/Colors";

// ----------------------------------------------------------------------

export default function HomePostButton() {
  const handlePress = () => {
    router.push("/post/new");
  };

  return (
    <View style={[styles.container, styles.shadow]}>
      <Pressable
        onPress={handlePress}
        android_ripple={{
          color: Colors.common.black[200],
          borderless: false,
        }}
        style={styles.button}
      >
        <Iconify
          icon="solar:pin-bold"
          color={Colors.common.white.main}
          size={24}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 10,
    right: 10,
    overflow: "hidden",
    borderRadius: 50,
    zIndex: 999,
  },
  button: {
    flex: 1,
    height: 60,
    width: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
});
