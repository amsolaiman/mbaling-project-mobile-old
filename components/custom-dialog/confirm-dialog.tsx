import { FC } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Modal, Portal } from "react-native-paper";
// hooks
import { useColorScheme } from "@/hooks/use-color-scheme";
// theme
import Colors from "@/theme/Colors";
// components
import { Text } from "@/components/custom-default";
// types
import { ConfirmDialogProps } from "./types";

// ----------------------------------------------------------------------

const ConfirmDialog: FC<ConfirmDialogProps> = ({
  open,
  onClose,
  message,
  closeButtonProps,
  closeButtonLabel = "ok",
  action,
}) => {
  const theme = useColorScheme() ?? "light";

  return (
    <Portal>
      <Modal
        visible={open}
        onDismiss={onClose}
        contentContainerStyle={[
          styles.modal,
          { backgroundColor: Colors[theme].card },
        ]}
      >
        {typeof message === "string" ? (
          <Text style={styles.text}>{message}</Text>
        ) : (
          <View style={{ padding: 16 }}>{message}</View>
        )}

        <View style={styles.buttonContainer}>
          {action}

          <Button onPress={onClose} {...closeButtonProps}>
            {closeButtonLabel}
          </Button>
        </View>
      </Modal>
    </Portal>
  );
};

export default ConfirmDialog;

const styles = StyleSheet.create({
  modal: {
    margin: 24,
    display: "flex",
    borderRadius: 4,
  },
  text: {
    padding: 16,
    fontSize: 14,
    lineHeight: 14 * 1.5,
  },
  buttonContainer: {
    padding: 8,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    gap: 8,
  },
});
