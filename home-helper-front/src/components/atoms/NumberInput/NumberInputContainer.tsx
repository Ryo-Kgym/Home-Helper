import { FC } from "react";
import { NumberInputPresenter } from "@components/atoms/NumberInput/NumberInputPresenter";

type NumberInputContainerProps = {
  label: string;
  value: Number | null;
  onChange: (value: Number) => void;
  placeholder?: string;
  withAsterisk?: boolean;
};
export const NumberInputContainer: FC<NumberInputContainerProps> = ({
  label,
  value,
  onChange,
  placeholder,
  withAsterisk,
}) => {
  const checkValue = (value: Number | null) => {
    if (value == undefined) {
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
      value={value?.valueOf()}
      onChange={onChange}
      placeholder={placeholder}
      error={checkValue(value)}
      withAsterisk={withAsterisk}
    />
  );
};
