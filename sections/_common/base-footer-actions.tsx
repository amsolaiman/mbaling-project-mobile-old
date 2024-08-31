import { StyleSheet, TouchableOpacity } from "react-native";
import { Iconify } from "react-native-iconify";
// hooks
import { useColorScheme } from "@/hooks/use-color-scheme";
// theme
import Colors from "@/theme/Colors";
// component
import { View } from "@/components/custom-native";

// ----------------------------------------------------------------------

type Props = {
  children?: React.ReactNode;
  LeftActionHidden?: boolean;
  LeftActionIcon?: React.ReactNode;
  LeftActionFunction?: VoidFunction;
  RightActionHidden?: boolean;
  RightActionIcon?: React.ReactNode;
  RightActionFunction?: VoidFunction;
};

const defaultIcon = (
  <Iconify
    icon="solar:menu-dots-bold"
    size={24}
    color={Colors.common.black.main}
  />
);

// ----------------------------------------------------------------------

export default function BaseFooterActions({
  children,
  LeftActionHidden = false,
  LeftActionIcon = defaultIcon,
  LeftActionFunction = () => {},
  RightActionHidden = false,
  RightActionIcon = defaultIcon,
  RightActionFunction = () => {},
}: Props) {
  const theme = useColorScheme() ?? "light";

  return (
    <View
      style={[
        styles.container,
        {
          borderTopColor:
            theme === "light" ? Colors.grey[200] : Colors.common.white[200],
        },
      ]}
    >
      <View style={styles.actionLeft}>
        <TouchableOpacity
          onPress={LeftActionFunction}
          style={[{ ...(LeftActionHidden && { display: "none" }) }]}
        >
          {LeftActionIcon}
        </TouchableOpacity>
      </View>

      <View style={styles.main}>{children}</View>

      <View style={styles.actionRight}>
        <TouchableOpacity
          onPress={RightActionFunction}
          style={[{ ...(RightActionHidden && { display: "none" }) }]}
        >
          {RightActionIcon}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    minHeight: 64,
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
  },
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  actionLeft: {
    minWidth: 24,
    justifyContent: "center",
  },
  actionRight: {
    minWidth: 24,
    justifyContent: "center",
  },
});
