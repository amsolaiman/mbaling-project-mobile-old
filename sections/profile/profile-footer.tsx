import { Alert, Linking } from "react-native";
import { Iconify } from "react-native-iconify";
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
    <BaseFooterActions
      LeftActionFunction={handleViewChat}
      LeftActionIcon={
        <Iconify
          icon="solar:chat-round-bold"
          size={24}
          color={Colors.common.black.main}
        />
      }
      RightActionFunction={handleViewMap}
      RightActionIcon={
        <Iconify
          icon="solar:map-point-bold"
          size={24}
          color={Colors.common.black.main}
        />
      }
    >
      <Button label="Apply" onPress={() => console.log(id)} />
    </BaseFooterActions>
  );
}
