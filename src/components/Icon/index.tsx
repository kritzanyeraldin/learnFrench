import { icons } from "~/constants/icons";
import { IconProps as PIconProps } from "@phosphor-icons/react";

type IconProps = PIconProps & {
  type: keyof typeof icons;
};

const Icon = ({ type, ...restProps }: IconProps) => {
  const PIcon = icons[type];
  return <PIcon {...restProps} />;
};

export default Icon;
