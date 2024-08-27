import { memo } from "react";
import { Iconify } from "react-native-iconify";

// ----------------------------------------------------------------------

type IconProps = {
  direction?:
    | "up"
    | "down"
    | "left"
    | "right"
    | "left-up"
    | "left-down"
    | "right-up"
    | "right-down";
  size: number;
  color: string;
};

const ArrowLinear = ({ direction = "up", size = 24, color }: IconProps) => {
  switch (direction) {
    case "down":
      return (
        <Iconify icon="solar:arrow-down-linear" size={size} color={color} />
      );

    case "left":
      return (
        <Iconify icon="solar:arrow-left-linear" size={size} color={color} />
      );

    case "right":
      return (
        <Iconify icon="solar:arrow-right-linear" size={size} color={color} />
      );

    case "left-up":
      return (
        <Iconify icon="solar:arrow-left-up-linear" size={size} color={color} />
      );

    case "left-down":
      return (
        <Iconify
          icon="solar:arrow-left-down-linear"
          size={size}
          color={color}
        />
      );

    case "right-up":
      return (
        <Iconify icon="solar:arrow-right-up-linear" size={size} color={color} />
      );

    case "right-down":
      return (
        <Iconify
          icon="solar:arrow-right-down-linear"
          size={size}
          color={color}
        />
      );

    default:
      return <Iconify icon="solar:arrow-up-linear" size={size} color={color} />;
  }
};

const ArrowBold = ({ direction = "up", size = 24, color }: IconProps) => {
  switch (direction) {
    case "down":
      return <Iconify icon="solar:arrow-down-bold" size={size} color={color} />;

    case "left":
      return <Iconify icon="solar:arrow-left-bold" size={size} color={color} />;

    case "right":
      return (
        <Iconify icon="solar:arrow-right-bold" size={size} color={color} />
      );

    case "left-up":
      return (
        <Iconify icon="solar:arrow-left-up-bold" size={size} color={color} />
      );

    case "left-down":
      return (
        <Iconify icon="solar:arrow-left-down-bold" size={size} color={color} />
      );

    case "right-up":
      return (
        <Iconify icon="solar:arrow-right-up-bold" size={size} color={color} />
      );

    case "right-down":
      return (
        <Iconify icon="solar:arrow-right-down-bold" size={size} color={color} />
      );

    default:
      return <Iconify icon="solar:arrow-up-bold" size={size} color={color} />;
  }
};

// ----------------------------------------------------------------------

export const ArrowIconBold = memo(ArrowBold);

export const ArrowIconLinear = memo(ArrowLinear);
