/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { Button } from "@mantine/core";
import { MantineColor, MantineSize } from "@mantine/styles";
import { ButtonColorType, ButtonProps } from "./";

export const MantineButton = ({
  onClick,
  colorType = "default",
  label = colorType.toUpperCase(),
  disabled = false,
}: ButtonProps) => {
  const {
    // @formatter:off
    className,
    size,
    color,
  } = PropMap.get(colorType) ?? {};

  return (
    <Button
      radius="sm"
      className={className}
      size={size}
      color={color}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </Button>
  );
};

type ButtonStyleProp = {
  className: string;
  size: MantineSize;
  color: MantineColor;
};

const PropMap = new Map<ButtonColorType, ButtonStyleProp>([
  ["default", { className: "m-2", size: "xl", color: "dark" }],
  ["register", { className: "m-2", size: "xl", color: "green" }],
  ["update", { className: "m-2", size: "xl", color: "indigo" }],
  ["clear", { className: "m-2", size: "xl", color: "gray" }],
  ["reset", { className: "m-2", size: "xl", color: "gray" }],
  ["import", { className: "m-2", size: "xl", color: "blue" }],
  ["delete", { className: "m-2", size: "xl", color: "red" }],
  ["detail", { className: "", size: "sm", color: "blue" }],
  ["done", { className: "m-2", size: "xl", color: "green" }],
  ["cancel", { className: "m-2", size: "xl", color: "gray" }],
]);