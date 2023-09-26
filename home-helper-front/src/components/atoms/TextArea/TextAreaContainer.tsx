import { ChangeEvent } from "react";
import { TextAreaPresenter } from "@components/atoms/TextArea/TextAreaPresenter";
import { MantineSize } from "@mantine/styles";

type NumberInputContainerProps = {
  label: string;
  value: string;
  setValue: (_: string) => void;
  placeholder?: string;
  withAsterisk?: boolean;
  size?: MantineSize;
};
export const TextAreaContainer = ({
  label,
  value,
  setValue,
  placeholder,
  withAsterisk,
  size,
}: NumberInputContainerProps) => {
  const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.currentTarget.value);
  };

  return (
    <TextAreaPresenter
      label={label}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      withAsterisk={withAsterisk}
      size={size}
    />
  );
};
