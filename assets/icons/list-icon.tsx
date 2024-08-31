import { memo } from "react";
import { Iconify } from "react-native-iconify";

// ----------------------------------------------------------------------

type IconProps = {
  isActive?: boolean;
  size: number;
  color: string;
};

const ListIcon = ({ isActive = false, size = 24, color }: IconProps) => {
  return isActive ? (
    <Iconify icon="solar:clipboard-text-bold" size={size} color={color} />
  ) : (
    <Iconify icon="solar:clipboard-text-linear" size={size} color={color} />
  );
};

export default memo(ListIcon);
