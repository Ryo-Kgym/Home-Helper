import { Button as MButton, MANTINE_COLORS } from "@mantine/core";
import type { FC } from "react";
import { MantineColor } from "@mantine/styles";

type ButtonProps = {
  onClick: () => void;
  colorType?: "register" | "clear";
  label?: string;
};
export const ButtonPresenter: FC<ButtonProps> = ({
  onClick,
  colorType = "register",
  label = colorType.toUpperCase(),
}) => {
  return (
    <MButton
      radius="xl"
      size="xl"
      color={COLOR_MAP.get(colorType)}
      onClick={onClick}
      className={"m-4"}
    >
      {label}
    </MButton>
  );
};

const COLOR_MAP = new Map<any, MantineColor>([
  ["register", "green"],
  ["clear", "gray"],
]);
