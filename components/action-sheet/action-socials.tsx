import { Iconify } from "react-native-iconify";
// @expo
import * as Linking from "expo-linking";
//
import { iconProps } from "./action-button";

// ----------------------------------------------------------------------

const socialAppsChecking = async () => {
  const apps: any = {};

  apps["Discord"] = await Linking.canOpenURL("discord://");
  apps["LINE"] = await Linking.canOpenURL("line://");
  apps["Messenger"] = await Linking.canOpenURL("fb-messenger://");
  apps["Snapchat"] = await Linking.canOpenURL("snapchat://");
  apps["Telegram"] = await Linking.canOpenURL("tg://");
  apps["Viber"] = await Linking.canOpenURL("viber://");
  apps["WeChat"] = await Linking.canOpenURL("weixin://");
  apps["WhatsApp"] = await Linking.canOpenURL("whatsapp://");

  const installed = Object.keys(apps).filter((app) => apps[app]);

  return installed;
};

export default socialAppsChecking;

// ----------------------------------------------------------------------

export const socialsReaderIcon = (name: string): React.ReactNode => {
  switch (name) {
    case "Discord":
      return <Iconify icon="logos:discord-icon" size={30} />;

    case "LINE":
      return <Iconify icon="simple-icons:line" size={30} color="#06c755" />;

    case "Messenger":
      return <Iconify icon="logos:messenger" size={30} />;

    case "Snapchat":
      return <Iconify icon="simple-icons:snapchat" size={30} color="#fffc00" />;

    case "Telegram":
      return <Iconify icon="logos:telegram" size={30} />;

    case "Viber":
      return <Iconify icon="simple-icons:viber" size={30} color="#7460f2" />;

    case "WeChat":
      return <Iconify icon="simple-icons:wechat" size={30} color="#04c665" />;

    case "WhatsApp":
      return <Iconify icon="logos:whatsapp-icon" size={30} />;

    default:
      return <Iconify icon="solar:chat-dots-linear" {...iconProps} />;
  }
};

export const socialsReaderUrl = (name: string, message: string): string => {
  switch (name) {
    case "Discord":
      return `discord://invite?text=${encodeURIComponent(message)}`;

    case "LINE":
      return `line://msg/text/?${encodeURIComponent(message)}`;

    case "Messenger":
      return `fb-messenger://share?text=${encodeURIComponent(message)}`;

    case "Snapchat":
      return `snapchat://add?text=${encodeURIComponent(message)}`;

    case "Telegram":
      return `tg://msg?text=${encodeURIComponent(message)}`;

    case "Viber":
      return `viber://forward?text=${encodeURIComponent(message)}`;

    case "WeChat":
      return `weixin://dl/chat?text=${encodeURIComponent(message)}`;

    case "WhatsApp":
      return `whatsapp://send?text=${encodeURIComponent(message)}`;

    default:
      return `sms:?body=${encodeURIComponent(message)}`;
  }
};
