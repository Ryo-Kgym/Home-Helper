import { NumberInputPresenter } from "@components/atoms/NumberInput/NumberInputPresenter";

type NumberInputContainerProps = {
  label: string;
  value: number | "";
  onChange: (_: number | "") => void;
  placeholder?: string;
  withAsterisk?: boolean;
  disabled?: boolean;
  maxLength?: number;
};
export const NumberInputContainer = ({
  label,
  value,
  onChange,
  placeholder,
  withAsterisk,
  disabled = false,
  maxLength = 9,
}: NumberInputContainerProps) => {
  const checkValue = (value: number | "") => {
    if (value === "") {
      return "Required";
    }
    if (String(value).length > maxLength) {
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
