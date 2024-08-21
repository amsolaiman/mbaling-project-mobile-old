import { FC } from "react";
import { Animated, Easing, Modal, StyleSheet, Text, View } from "react-native";
// theme
import Fonts from "@/theme/Fonts";
import Colors from "@/theme/Colors";
// component
import { Iconify } from "react-native-iconify";

// ----------------------------------------------------------------------

type Props = {
  state: boolean;
  caption?: string;
};

const SpinnerOverlay: FC<Props> = ({ state, caption = "Loading..." }) => {
  const spinValue = new Animated.Value(0);

  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    })
  ).start();

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={state}
      onRequestClose={() => {}}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Animated.View style={{ transform: [{ rotate: spin }] }}>
            <Iconify
              icon="mingcute:loading-3-line"
              size={48}
              color={Colors.primary}
            />
          </Animated.View>

          <Text style={styles.caption}>{caption}</Text>
        </View>
      </View>
    </Modal>
  );
};

export default SpinnerOverlay;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.common.blackVariant,
  },
  container: {
    display: "flex",
    alignItems: "center",
    gap: 12,
  },
  caption: {
    color: Colors.common.white,
    textAlign: "center",
    fontSize: 14,
    ...Fonts[400],
  },
});
