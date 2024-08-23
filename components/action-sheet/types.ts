import { ViewProps } from "react-native";

// ----------------------------------------------------------------------

export type DefaultActionSheetProps = {
  meta: ActionSheetMetaProps;
  onClose: VoidFunction;
};

export type ActionSheetMetaProps = {
  title: string;
  imageUrl: string;
  link: string;
};

export type ActionButtonProps = {
  label: string;
  icon: React.ReactNode;
  onPress: VoidFunction;
};

export type ActionButtonBasicProps = ViewProps & {
  meta: ActionSheetMetaProps;
  onClose?: VoidFunction;
};
