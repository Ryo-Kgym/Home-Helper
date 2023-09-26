import { Button as MButton } from "@mantine/core";

import { MantineColor, MantineSize } from "@mantine/styles";

type ButtonProps = {
  onClick: () => void;
  colorType?: ButtonColorType;
  label?: string;
  disabled?: boolean;
};
export const Button = ({
  onClick,
  colorType = "default",
  label = colorType.toUpperCase(),
  disabled = false,
}: ButtonProps) => {
  const { className, size, color } = PropMap.get(colorType) ?? {};

  return (
    <>
      <div className={"max-sm:hidden"}>
        <MButton
          radius="sm"
          className={className}
          size={size}
          color={color}
          onClick={onClick}
          disabled={disabled}
        >
          {label}
        </MButton>
      </div>
      <div className={"sm:hidden"}>
        <MButton
          radius="sm"
          className={className}
          size={"xs"}
          color={color}
          onClick={onClick}
          disabled={disabled}
        >
          {label}
        </MButton>
      </div>
    </>
  );
};

type ButtonColorType =
  | "default"
  | "register"
  | "update"
  | "clear"
  | "reset"
  | "detail"
  | "import"
  | "delete"
  | "done"
  | "cancel";

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
