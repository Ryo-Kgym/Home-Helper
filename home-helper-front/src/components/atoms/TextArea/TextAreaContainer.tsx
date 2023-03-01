import { ChangeEvent, FC } from "react";
import { TextAreaPresenter } from "@components/atoms/TextArea/TextAreaPresenter";
import { MantineSize } from "@mantine/styles";

type NumberInputContainerProps = {
  label: string;
  value: string;
  setValue: (value: string) => void;
  placeholder?: string;
  withAsterisk?: boolean;
  size?: MantineSize;
};
export const TextAreaContainer: FC<NumberInputContainerProps> = ({
  label,
  value,
  setValue,
  placeholder,
  withAsterisk,
  size,
}) => {
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
