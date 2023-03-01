import { Textarea } from "@mantine/core";
import { ChangeEvent, FC } from "react";
import { MantineSize } from "@mantine/styles";

type NumberInputPresenterProps = {
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  withAsterisk?: boolean;
  size?: MantineSize;
};
export const TextAreaPresenter: FC<NumberInputPresenterProps> = ({
  label,
  value,
  onChange,
  placeholder,
  withAsterisk,
  size = "lg",
}) => (
  <Textarea
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    label={label}
    size={size}
    withAsterisk={withAsterisk}
  />
);
