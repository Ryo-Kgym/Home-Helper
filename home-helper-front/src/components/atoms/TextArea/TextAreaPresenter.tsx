import { Textarea } from "@mantine/core";
import { ChangeEvent } from "react";
import { MantineSize } from "@mantine/styles";

type NumberInputPresenterProps = {
  label: string;
  value: string;
  onChange: (_: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  withAsterisk?: boolean;
  size?: MantineSize;
};
export const TextAreaPresenter = ({
  label,
  value,
  onChange,
  placeholder,
  withAsterisk,
  size = "lg",
}: NumberInputPresenterProps) => (
  <>
    <Textarea
      className={"max-sm:hidden"}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      label={label}
      size={size}
      withAsterisk={withAsterisk}
    />
    <Textarea
      className={"sm:hidden"}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      label={label}
      size={"xs"}
      withAsterisk={withAsterisk}
    />
  </>
);
