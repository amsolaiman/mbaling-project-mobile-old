import { memo } from "react";
import { Iconify } from "react-native-iconify";

// ----------------------------------------------------------------------

type IconProps = {
  isActive?: boolean;
  size: number;
  color: string;
};

function BaseIconManage({ isActive = false, size = 24, color }: IconProps) {
  return isActive ? (
    <Iconify icon="solar:pen-bold" size={size} color={color} />
  ) : (
    <Iconify icon="solar:pen-linear" size={size} color={color} />
  );
}

export default memo(BaseIconManage);
