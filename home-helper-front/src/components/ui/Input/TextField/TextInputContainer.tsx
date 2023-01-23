import { TextInputPresenter } from "@components/ui/Input/TextField/TextInputPresenter";
import { ChangeEvent, FC } from "react";
import { InputValidator } from "@components/ui/Input/InputValidator";

type TextInputContainerProps = {
  label: string;
  type?: "text" | "number";
  value: string | number;
  onChange: (value: ChangeEvent<HTMLInputElement>) => void;
  validator?: InputValidator;
  placeholder?: string;
};
export const TextInputContainer: FC<TextInputContainerProps> = ({
  label,
  type = "text",
  value,
  onChange,
  validator = { result: false, message: "" },
  placeholder = "",
}) => {
  const onChangeHandler = (event: any) => {
    onChange(event.target.value);
  };

  const errorMessage = validator.result ? validator.message : "";

  return (
    <TextInputPresenter
      label={label}
      type={type}
      value={value}
      onChangeHandler={onChangeHandler}
      errorMessage={errorMessage}
      placeholder={placeholder}
    />
  );
};
