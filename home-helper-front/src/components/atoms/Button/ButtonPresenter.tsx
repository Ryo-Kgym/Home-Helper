import { Button as MButton, MANTINE_COLORS } from "@mantine/core";
import type { FC } from "react";
import { MantineColor, MantineSize } from "@mantine/styles";

type ButtonProps = {
  onClick: () => void;
  colorType?: ButtonType;
  label?: string;
  disabled?: boolean;
};
export const ButtonPresenter: FC<ButtonProps> = ({
  onClick,
  colorType = ButtonType.REGISTER,
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

enum ButtonType {
  REGISTER = "register",
  CLEAR = "clear",
  IMPORT = "import",
  DELETE = "delete",
  DETAIL = "detail",
}

const COLOR_MAP = new Map<ButtonType, MantineColor>([
  [ButtonType.REGISTER, "green"],
  [ButtonType.CLEAR, "gray"],
  [ButtonType.IMPORT, "blue"],
  [ButtonType.DELETE, "red"],
  [ButtonType.DETAIL, "blue"],
]);

const SIZE_MAP = new Map<ButtonType, MantineSize>([
  [ButtonType.REGISTER, "xl"],
  [ButtonType.CLEAR, "xl"],
  [ButtonType.IMPORT, "xl"],
  [ButtonType.DELETE, "xl"],
  [ButtonType.DETAIL, "sm"],
]);

const CLASS_MAP = new Map<ButtonType, string>([
  [ButtonType.REGISTER, "m-4"],
  [ButtonType.CLEAR, "m-4"],
  [ButtonType.IMPORT, "m-4"],
  [ButtonType.DELETE, "m-4"],
  [ButtonType.DETAIL, ""],
]);
