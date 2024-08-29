import { forwardRef } from "react";
import { StyleSheet, View as DefaultView, Pressable } from "react-native";
import { Iconify } from "react-native-iconify";
// hooks
import { useColorScheme } from "@/hooks/use-color-scheme";
// theme
import Colors from "@/theme/Colors";
// components
import { Text, View } from "@/components/custom-native";

// ----------------------------------------------------------------------

type Props = {
  title: string;
  caption: string;
  instruction?: string;
  onPress?: VoidFunction;
};

const InfoHelper = forwardRef<DefaultView, Props>(
  ({ title, caption, instruction, onPress = () => {} }, ref) => {
    const theme = useColorScheme() ?? "light";

    return (
      <View style={styles.container}>
        <View style={styles.textWrapper}>
          <Text
            font="600"
            style={[
              styles.title,
              {
                color:
                  theme === "light"
                    ? Colors.grey[700]
                    : Colors.common.white.main,
              },
            ]}
          >
            {title}
          </Text>

          <Text font="400" style={[styles.caption]}>
            {caption}
          </Text>

          {instruction && (
            <Text font="400" style={styles.caption}>
              {instruction}
            </Text>
          )}
        </View>

        <Pressable onPress={onPress}>
          <Iconify
            icon="solar:question-circle-linear"
            size={42}
            color={Colors.grey[500]}
          />
        </Pressable>
      </View>
    );
  }
);

export default InfoHelper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 18,
  },
  textWrapper: {
    flex: 1,
  },
  title: {
    marginBottom: 6,
    fontSize: 16,
  },
  caption: {
    fontSize: 12,
    lineHeight: 12 * 1.2,
    color: Colors.grey[500],
  },
});
