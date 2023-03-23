import { Button as MButton, MANTINE_COLORS } from "@mantine/core";
import type { FC } from "react";
import { MantineColor, MantineSize } from "@mantine/styles";

type ButtonProps = {
  onClick: () => void;
  colorType?: ButtonColorType;
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
      className={PROP_MAP.get(colorType)!.className}
      size={PROP_MAP.get(colorType)!.size}
      color={PROP_MAP.get(colorType)!.color}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </MButton>
  );
};

type ButtonColorType =
  | "register"
  | "update"
  | "clear"
  | "reset"
  | "detail"
  | "import"
  | "delete";

type ButtonStyleProp = {
  className: string;
  size: MantineSize;
  color: MantineColor;
};

const PROP_MAP = new Map<ButtonColorType, ButtonStyleProp>([
  ["register", { className: "m-2", size: "xl", color: "green" }],
  ["update", { className: "m-2", size: "xl", color: "indigo" }],
  ["clear", { className: "m-2", size: "xl", color: "gray" }],
  ["reset", { className: "m-2", size: "xl", color: "gray" }],
  ["import", { className: "m-2", size: "xl", color: "blue" }],
  ["delete", { className: "m-2", size: "xl", color: "red" }],
  ["detail", { className: "", size: "sm", color: "blue" }],
]);
