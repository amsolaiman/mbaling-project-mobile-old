import { Alert, Pressable, Share, StyleSheet, View } from "react-native";
import { Iconify } from "react-native-iconify";
// @expo
import * as Linking from "expo-linking";
import * as Clipboard from "expo-clipboard";
// theme
import Colors from "@/theme/Colors";
//
import { Text } from "@/components/custom-native";
import { ActionButtonProps, ActionButtonBasicProps } from "./types";

// ----------------------------------------------------------------------

const ActionButton: React.FC<ActionButtonProps> = ({
  label,
  icon,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress} style={styles.button}>
        {icon}
      </Pressable>

      <Text font="300" numberOfLines={1} style={styles.label}>
        {label}
      </Text>
    </View>
  );
};

export default ActionButton;

const styles = StyleSheet.create({
  container: {
    width: 60,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
  },
  button: {
    width: 56,
    height: 56,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.grey[200],
    borderRadius: 50,
  },
  label: {
    width: "100%",
    textAlign: "center",
    fontSize: 12,
  },
});

// ----------------------------------------------------------------------

export const iconProps = {
  size: 30,
  color: Colors.common.black.main,
};

export const ActionButtonCopy: React.FC<ActionButtonBasicProps> = ({
  meta,
  onClose = () => {},
}) => {
  const handlePress = async () => {
    try {
      await Clipboard.setStringAsync(meta.link);

      onClose();
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  return (
    <ActionButton
      label="Copy link"
      onPress={handlePress}
      icon={<Iconify icon="solar:link-linear" {...iconProps} />}
    />
  );
};

export const ActionButtonShare: React.FC<ActionButtonBasicProps> = ({
  meta,
  onClose = () => {},
}) => {
  const handlePress = async () => {
    const message = `mBALING | ${meta.title}\n\n${meta.link}`;

    try {
      await Share.share({
        message,
      });

      onClose();
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  return (
    <ActionButton
      label="Share"
      onPress={handlePress}
      icon={<Iconify icon="solar:share-linear" {...iconProps} />}
    />
  );
};

export const ActionButtonMessage: React.FC<ActionButtonBasicProps> = ({
  meta,
  onClose = () => {},
}) => {
  const handlePress = async () => {
    const message = `mBALING | ${meta.title}\n\n${meta.link}`;

    try {
      const url = `sms:?body=${encodeURIComponent(message)}`;

      await Linking.openURL(url).catch((_) => {
        Alert.alert("Failed to open messaging app.");
      });

      onClose();
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  return (
    <ActionButton
      label="Message"
      onPress={handlePress}
      icon={<Iconify icon="solar:chat-dots-linear" {...iconProps} />}
    />
  );
};

export const ActionButtonEmail: React.FC<ActionButtonBasicProps> = ({
  meta,
  onClose = () => {},
}) => {
  const handlePress = async () => {
    const message = `mBALING | ${meta.title}\n\n${meta.link}`;

    try {
      const url = `mailto:?body=${encodeURIComponent(message)}`;

      await Linking.openURL(url).catch((_) => {
        Alert.alert("Failed to open mailing app.");
      });

      onClose();
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  return (
    <ActionButton
      label="Email"
      onPress={handlePress}
      icon={<Iconify icon="solar:letter-linear" {...iconProps} />}
    />
  );
};

export const ActionButtonReport: React.FC<ActionButtonBasicProps> = ({
  meta,
  onClose = () => {},
}) => {
  const handlePress = async () => {
    Alert.alert("This feature is not yet available.");

    onClose();
  };

  return (
    <ActionButton
      label="Report"
      onPress={handlePress}
      icon={<Iconify icon="solar:flag-bold" {...iconProps} />}
    />
  );
};
