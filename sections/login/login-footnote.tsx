import { Pressable, StyleSheet, Text, View } from "react-native";
import { Modal, Portal } from "react-native-paper";
import { Iconify } from "react-native-iconify";
// hooks
import { useBoolean } from "@/hooks/use-boolean";
// theme
import Fonts from "@/theme/Fonts";
import Colors from "@/theme/Colors";

// ----------------------------------------------------------------------

export default function LoginFootnote() {
  const open = useBoolean(false);

  return (
    <View style={styles.container}>
      <Pressable onPress={open.onTrue} style={styles.button}>
        <Text style={styles.text}>Sign-up for an account</Text>

        <Iconify
          icon="solar:question-circle-linear"
          size={16}
          color={Colors.common.white}
        />
      </Pressable>

      <Portal>
        <Modal
          visible={open.value}
          onDismiss={open.onFalse}
          contentContainerStyle={styles.modal}
        >
          <Text style={{ ...Fonts[400] }}>
            Please proceed to the MSU Housing Management Division to sign-up for
            an account.
          </Text>
        </Modal>
      </Portal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  text: {
    color: Colors.common.white,
    fontSize: 14,
    ...Fonts[400],
  },
  modal: {
    padding: 20,
    margin: 30,
    backgroundColor: Colors.common.white,
  },
});
