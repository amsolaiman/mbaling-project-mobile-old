import { FC } from "react";
import { Animated, Easing } from "react-native";
import { Iconify } from "react-native-iconify";
// theme
import Colors from "@/theme/Colors";

// ----------------------------------------------------------------------

type Props = {
  size?: number;
  speed?: number;
  color?: "primary" | "light" | "dark";
};

const Spinner: FC<Props> = ({ size = 48, speed, color = "primary" }) => {
  const spinValue = new Animated.Value(0);

  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: speed ?? 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    })
  ).start();

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <Animated.View
      style={{ width: size, height: size, transform: [{ rotate: spin }] }}
    >
      <Iconify
        icon="mingcute:loading-3-line"
        size={size}
        color={color === "primary" ? Colors.primary : Colors[color].background}
      />
    </Animated.View>
  );
};

export default Spinner;
