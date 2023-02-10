import { TextInput } from "@mantine/core";
import { ChangeEvent, FC, HTMLInputTypeAttribute } from "react";

type TextInputPresenterProps = {
  label: string;
  type: HTMLInputTypeAttribute;
  value: string | number;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  errorMessage: string;
  placeholder: string;
};

export const TextInputPresenter: FC<TextInputPresenterProps> = ({
  label,
  type,
  value,
  onChangeHandler,
  errorMessage,
  placeholder,
}) => {
  return (
    <TextInput
      label={label}
      type={type}
      error={errorMessage}
      value={value}
      onChange={onChangeHandler}
      size={"xl"}
      placeholder={placeholder}
    />
  );
};
