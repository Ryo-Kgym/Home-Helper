import { NumberInput } from "@mantine/core";
import { FC } from "react";

type NumberInputPresenterProps = {
  label: string;
  value: number | "";
  onChange: (value: number) => void;
  placeholder?: string;
  error: string;
  withAsterisk?: boolean;
};
export const NumberInputPresenter: FC<NumberInputPresenterProps> = ({
  label,
  value,
  onChange,
  placeholder,
  error,
  withAsterisk,
}) => (
  <NumberInput
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    label={label}
    error={error}
    size="lg"
    withAsterisk={withAsterisk}
    hideControls
  />
);
