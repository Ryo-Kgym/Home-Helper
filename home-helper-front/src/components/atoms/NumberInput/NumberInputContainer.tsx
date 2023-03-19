import { FC } from "react";
import { NumberInputPresenter } from "@components/atoms/NumberInput/NumberInputPresenter";

type NumberInputContainerProps = {
  label: string;
  value: number | "";
  onChange: (value: number | "") => void;
  placeholder?: string;
  withAsterisk?: boolean;
  disabled?: boolean;
};
export const NumberInputContainer: FC<NumberInputContainerProps> = ({
  label,
  value,
  onChange,
  placeholder,
  withAsterisk,
  disabled = false,
}) => {
  const checkValue = (value: number | "") => {
    if (value === "") {
      return "Required";
    }
    if (String(value).length > 9) {
      return "Too long";
    }
    return "";
  };

  return (
    <NumberInputPresenter
      label={label}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      error={checkValue(value)}
      withAsterisk={withAsterisk}
      disabled={disabled}
    />
  );
};
