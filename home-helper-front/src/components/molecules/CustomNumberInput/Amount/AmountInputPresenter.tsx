import { FC } from "react";
import { NumberInput } from "@components/atoms/NumberInput";

type AmountInputPresenterProps = {
  value: number | "";
  onChange: (value: number | "") => void;
  disabled?: boolean;
};
export const AmountInputPresenter: FC<AmountInputPresenterProps> = ({
  value,
  onChange,
  disabled = false,
}) => (
  <NumberInput
    label={"Amount"}
    value={value}
    onChange={onChange}
    placeholder="0 - 999,999,999"
    withAsterisk={true}
    disabled={disabled}
  />
);
