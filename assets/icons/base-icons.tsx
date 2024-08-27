import { memo } from "react";
import { Iconify } from "react-native-iconify";

// ----------------------------------------------------------------------

type IconProps = {
  isActive?: boolean;
  size: number;
  color: string;
};

const HomeIcon = ({ isActive = false, size = 24, color }: IconProps) => {
  return isActive ? (
    <Iconify icon="solar:home-2-bold" size={size} color={color} />
  ) : (
    <Iconify icon="solar:home-2-linear" size={size} color={color} />
  );
};

const SearchIcon = ({ isActive = false, size = 24, color }: IconProps) => {
  return isActive ? (
    <Iconify icon="solar:magnifer-bold" size={size} color={color} />
  ) : (
    <Iconify icon="solar:magnifer-linear" size={size} color={color} />
  );
};

const ManageIcon = ({ isActive = false, size = 24, color }: IconProps) => {
  return isActive ? (
    <Iconify icon="solar:pen-bold" size={size} color={color} />
  ) : (
    <Iconify icon="solar:pen-linear" size={size} color={color} />
  );
};

const UserIcon = ({ isActive = false, size = 24, color }: IconProps) => {
  return isActive ? (
    <Iconify icon="solar:user-bold" size={size} color={color} />
  ) : (
    <Iconify icon="solar:user-linear" size={size} color={color} />
  );
};

const SettingsIcon = ({ isActive = false, size = 24, color }: IconProps) => {
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

// ----------------------------------------------------------------------

export const BaseIconHome = memo(HomeIcon);

export const BaseIconUser = memo(UserIcon);

export const BaseIconSearch = memo(SearchIcon);

export const BaseIconManage = memo(ManageIcon);

export const BaseIconSettings = memo(SettingsIcon);
