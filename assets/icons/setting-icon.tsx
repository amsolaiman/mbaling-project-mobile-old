import { memo } from "react";
import { Iconify } from "react-native-iconify";

// ----------------------------------------------------------------------

type IconProps = {
  isActive?: boolean;
  size: number;
  color: string;
};

const SettingIcon = ({ isActive = false, size = 24, color }: IconProps) => {
  return isActive ? (
    <Iconify
      icon="solar:settings-minimalistic-bold"
      size={size}
      color={color}
    />
  ) : (
    <Iconify
      icon="solar:settings-minimalistic-linear"
      size={size}
      color={color}
    />
  );
};

export default memo(SettingIcon);
