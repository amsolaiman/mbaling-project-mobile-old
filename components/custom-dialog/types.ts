import { ButtonProps, ModalProps } from "react-native-paper";

// ----------------------------------------------------------------------

export type ConfirmDialogProps = {
  open: boolean;
  onClose: VoidFunction;
  message: string | React.ReactNode;
  action?: React.ReactNode;
  closeButtonProps?: ButtonProps;
  closeButtonLabel?: string;
};
