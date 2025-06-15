import { useEffect, useState } from "react";
import { Alert } from "react-native";
// @expo
import * as Linking from "expo-linking";
//
import ActionButton, {
  ActionButtonCopy,
  ActionButtonEmail,
  ActionButtonShare,
  ActionButtonReport,
  ActionButtonMessage,
} from "./action-button";
import socialAppsChecking, {
  socialsReaderUrl,
  socialsReaderIcon,
} from "./action-socials";
import { ActionMetaProps } from "./types";

// ----------------------------------------------------------------------

export default function ActionSheetController(
  meta: ActionMetaProps,
  onClose: VoidFunction
) {
  const socials = AddAvailableSocial(meta, onClose) ?? [];

  return [
    {
      name: "Copy link",
      component: <ActionButtonCopy meta={meta} onClose={onClose} />,
    },
    {
      name: "Share",
      component: <ActionButtonShare meta={meta} onClose={onClose} />,
    },
    {
      name: "Message",
      component: <ActionButtonMessage meta={meta} onClose={onClose} />,
    },
    {
      name: "Email",
      component: <ActionButtonEmail meta={meta} onClose={onClose} />,
    },
    ...socials,
    {
      name: "Report",
      component: <ActionButtonReport meta={meta} onClose={onClose} />,
    },
  ];
}

// ----------------------------------------------------------------------

function AddAvailableSocial(meta: ActionMetaProps, onClose: VoidFunction) {
  const [apps, setApps] = useState<string[]>([]);

  useEffect(() => {
    const fetchSocialApps = async () => {
      const result = await socialAppsChecking();

      setApps(result);
    };

    fetchSocialApps();
  }, []);

  const handlePress = async (name: string) => {
    const message = `mBALING | ${meta.title}\n\n${meta.link}`;

    try {
      const url = socialsReaderUrl(name, message);

      await Linking.openURL(url).catch((_) => {
        Alert.alert("Failed to open app.");
      });

      onClose();
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  return [...Array(apps.length)].map((_, index) => ({
    name: apps[index],
    component: (
      <ActionButton
        label={apps[index]}
        icon={socialsReaderIcon(apps[index])}
        onPress={() => handlePress(apps[index])}
      />
    ),
  }));
}
