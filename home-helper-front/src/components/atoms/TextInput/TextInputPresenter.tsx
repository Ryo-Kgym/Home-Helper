import { TextInput } from "@mantine/core";
import { ChangeEventHandler, FC } from "react";

type NumberInputPresenterProps = {
  label: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  error: string;
  withAsterisk?: boolean;
  disabled: boolean;
};
export const TextInputPresenter: FC<NumberInputPresenterProps> = ({
  label,
  value,
  onChange,
  placeholder,
  error,
  withAsterisk,
  disabled,
}) => (
  <TextInput
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    label={label}
    error={error}
    size="lg"
    withAsterisk={withAsterisk}
    disabled={disabled}
  />
);
