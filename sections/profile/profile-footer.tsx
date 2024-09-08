import { Alert, Linking, StyleSheet, View } from "react-native";
import { Iconify } from "react-native-iconify";
// hooks
import { useColorScheme } from "@/hooks/use-color-scheme";
// theme
import Colors from "@/theme/Colors";
// components
import { Button } from "@/components/custom-native";
//
import { BaseFooterActions } from "../_common";

// ----------------------------------------------------------------------
type Props = {
  id: string;
  mapLink?: string | null;
  chatLink?: string | null;
};

export default function ProfileFooter({ id, mapLink, chatLink }: Props) {
  const theme = useColorScheme() ?? "light";

  const handleViewChat = () => {
    if (chatLink) {
      Linking.openURL(chatLink);
    } else {
      Alert.alert("This account has not provided a Messenger link");
    }
  };

  const handleViewMap = () => {
    if (mapLink) {
      Linking.openURL(mapLink);
    } else {
      Alert.alert("This account has not provided a Google Map link");
    }
  };

  return (
    <View style={styles.container}>
      <BaseFooterActions
        LeftActionFunction={handleViewChat}
        LeftActionIcon={
          <Iconify
            icon="solar:chat-round-bold"
            size={24}
            color={Colors[theme].text}
          />
        }
        RightActionFunction={handleViewMap}
        RightActionIcon={
          <Iconify
            icon="solar:map-point-bold"
            size={24}
            color={Colors[theme].text}
          />
        }
      >
        <Button label="Apply" onPress={() => console.log(id)} />
      </BaseFooterActions>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    bottom: 0,
    left: 0,
    right: 0,
  },
});
