import { FC } from "react";
import { TextInputPresenter } from "@components/atoms/TextInput/TextInputPresenter";

type NumberInputContainerProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  withAsterisk?: boolean;
  disabled?: boolean;
  maxLength?: number;
};
export const TextInputContainer: FC<NumberInputContainerProps> = ({
  label,
  value,
  onChange,
  placeholder,
  withAsterisk,
  disabled = false,
  maxLength = 32,
}) => {
  const checkValue = (value: string) => {
    if (value === "") {
      return "Required";
    }
    if (value.length > maxLength) {
      return `Too long. Until ${maxLength} characters}`;
    }
    return "";
  };

  return (
    <TextInputPresenter
      label={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      error={checkValue(value)}
      withAsterisk={withAsterisk}
      disabled={disabled}
    />
  );
};
