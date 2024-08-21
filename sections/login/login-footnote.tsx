import { Pressable, StyleSheet, View, Text as DefaultText } from "react-native";
import { Iconify } from "react-native-iconify";
// hooks
import { useBoolean } from "@/hooks/use-boolean";
// theme
import Fonts from "@/theme/Fonts";
import Colors from "@/theme/Colors";
// components
import ConfirmDialog from "@/components/custom-dialog";

// ----------------------------------------------------------------------

export default function LoginFootnote() {
  const open = useBoolean(false);

  return (
    <>
      <View style={styles.container}>
        <Pressable onPress={open.onTrue} style={styles.button}>
          <DefaultText style={styles.text}>Sign-up for an account</DefaultText>

          <Iconify
            icon="solar:question-circle-linear"
            size={16}
            color={Colors.common.white}
          />
        </Pressable>
      </View>

      <ConfirmDialog
        open={open.value}
        onClose={open.onFalse}
        message="Please proceed to the MSU Housing Management Division to sign-up for an account."
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 24,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  text: {
    color: Colors.common.white,
    fontSize: 14,
    ...Fonts[400],
  },
});
