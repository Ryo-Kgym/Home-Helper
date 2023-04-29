import { FC } from "react";
import { NumberInput } from "@components/atoms/NumberInput";

type AmountInputPresenterProps = {
  value: number | "";
  onChange: (value: number | "") => void;
  disabled?: boolean;
};
export const DisplayOrderInputPresenter: FC<AmountInputPresenterProps> = ({
  value,
  onChange,
  disabled = false,
}) => (
  <NumberInput
    label={"DISPLAY ORDER"}
    value={value}
    onChange={onChange}
    placeholder="0 - 9999"
    withAsterisk={true}
    disabled={disabled}
  />
);
