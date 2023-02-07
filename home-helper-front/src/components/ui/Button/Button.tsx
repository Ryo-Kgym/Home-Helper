import { Button as MButton } from "@mantine/core";
import type { FC } from "react";
import { MantineColor } from "@mantine/styles";

type ButtonProps = {
  label: string;
  onClick: () => void;
  colorType?: "register";
};
export const Button: FC<ButtonProps> = ({
  label,
  onClick,
  colorType = "register",
}) => {
  const map = COLOR_MAP.get(colorType);
  const colorClass = `${map}-500 hover:${map}-400`;

  return (
    <MButton
      radius="xl"
      size="xl"
      onClick={onClick}
      className={"m-4 " + colorClass}
    >
      {label}
    </MButton>
  );
};

const COLOR_MAP = new Map<any, string>([["register", "bg-green"]]);
