import { Pressable, StyleSheet } from "react-native";
// @expo
import { router } from "expo-router";
// hooks
import { useColorScheme } from "@/hooks/use-color-scheme";
// theme
import Colors from "@/theme/Colors";
// assets
import { ArrowIconLinear } from "@/assets/icons";

// ----------------------------------------------------------------------

type Props = {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
};

const BackButton: React.FC<Props> = ({ position = "top-left" }) => {
  const theme = useColorScheme() ?? "light";

  return (
    <Pressable
      onPress={router.back}
      style={[
        styles.container,
        {
          backgroundColor:
            theme === "light"
              ? Colors.common.black[700]
              : Colors.common.white[700],
          ...getPosition(position),
        },
      ]}
    >
      <ArrowIconLinear
        direction="left"
        size={24}
        color={Colors[theme].background}
      />
    </Pressable>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    height: 42,
    width: 42,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    zIndex: 999,
  },
});

const getPosition = (position: string) => {
  switch (position) {
    case "top-right":
      return {
        top: 10,
        right: 10,
      };

    case "bottom-left":
      return {
        bottom: 10,
        left: 10,
      };

    case "bottom-right":
      return {
        bottom: 10,
        right: 10,
      };

    default:
      return {
        top: 10,
        left: 10,
      };
  }
};
