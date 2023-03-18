import { Button as MButton, MANTINE_COLORS } from "@mantine/core";
import type { FC } from "react";
import { MantineColor, MantineSize } from "@mantine/styles";

type ButtonProps = {
  onClick: () => void;
  colorType?: "register" | "clear" | "detail" | "import";
  label?: string;
  disabled?: boolean;
};
export const ButtonPresenter: FC<ButtonProps> = ({
  onClick,
  colorType = "register",
  label = colorType.toUpperCase(),
  disabled = false,
}) => {
  return (
    <MButton
      radius="xl"
      size={SIZE_MAP.get(colorType)}
      color={COLOR_MAP.get(colorType)}
      onClick={onClick}
      className={CLASS_MAP.get(colorType)}
      disabled={disabled}
    >
      {label}
    </MButton>
  );
};

const COLOR_MAP = new Map<any, MantineColor>([
  ["register", "green"],
  ["clear", "gray"],
  ["import", "blue"],
  ["detail", "blue"],
]);

const SIZE_MAP = new Map<any, MantineSize>([
  ["register", "xl"],
  ["clear", "xl"],
  ["import", "xl"],
  ["detail", "sm"],
]);

const CLASS_MAP = new Map<any, string>([
  ["register", "m-4"],
  ["clear", "m-4"],
  ["import", "m-4"],
  ["detail", ""],
]);
