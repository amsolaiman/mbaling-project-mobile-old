import { memo } from "react";
import { Iconify } from "react-native-iconify";

// ----------------------------------------------------------------------

type IconProps = {
  isActive?: boolean;
  size: number;
  color: string;
};

function BaseIconSearch({ isActive = false, size = 24, color }: IconProps) {
  return isActive ? (
    <Iconify icon="solar:magnifer-bold" size={size} color={color} />
  ) : (
    <Iconify icon="solar:magnifer-linear" size={size} color={color} />
  );
}

export default memo(BaseIconSearch);
