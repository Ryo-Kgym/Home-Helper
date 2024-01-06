import { NumberInput } from "@mantine/core";

type NumberInputPresenterProps = {
  label: string;
  value: number | "";
  onChange: (_: number) => void;
  placeholder?: string;
  error: string;
  withAsterisk?: boolean;
  disabled: boolean;
};
export const NumberInputPresenter = ({
  label,
  value,
  onChange,
  placeholder,
  error,
  withAsterisk,
  disabled,
}: NumberInputPresenterProps) => (
  <>
    <NumberInput
      className={"max-sm:hidden"}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      label={label}
      error={error}
      size="lg"
      withAsterisk={withAsterisk}
      hideControls
      disabled={disabled}
    />
    <NumberInput
      className={"sm:hidden"}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      label={label}
      error={error}
      size={"xs"}
      withAsterisk={withAsterisk}
      hideControls
      disabled={disabled}
    />
  </>
);
