import { NumberInput } from "@components/atoms/NumberInput";

type AmountInputPresenterProps = {
  value: number | "";
  onChange: (_: number | "") => void;
  disabled?: boolean;
};
export const DisplayOrderInputPresenter = ({
  value,
  onChange,
  disabled = false,
}: AmountInputPresenterProps) => (
  <NumberInput
    label={"DISPLAY ORDER"}
    value={value}
    onChange={onChange}
    placeholder="0 - 9999"
    withAsterisk={true}
    disabled={disabled}
  />
);
