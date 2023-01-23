import { FC } from "react";
import { TextField } from "@components/ui/Input/TextField";
import { InputValidator } from "@components/ui/Input/InputValidator";

type InputContainerProps = {
  label: string;
  type?: "text" | "number";
  value: string | number;
  onChange: (value: any) => void;
  validator?: InputValidator;
  placeholder?: string;
};

export const InputContainer: FC<InputContainerProps> = ({
  label,
  type = "text",
  value,
  onChange,
  validator,
  placeholder,
}) => {
  return (
    <TextField
      label={label}
      type={type}
      value={value}
      onChange={onChange}
      validator={validator}
      placeholder={placeholder}
    />
  );
};
