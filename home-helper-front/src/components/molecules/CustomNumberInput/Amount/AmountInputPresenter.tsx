import { FC } from "react";
import { NumberInput } from "@components/atoms/NumberInput";

type AmountInputPresenterProps = {
  value: Number;
  onChange: (value: Number) => void;
};
export const AmountInputPresenter: FC<AmountInputPresenterProps> = ({
  value,
  onChange,
}) => (
  <NumberInput
    label={"Amount"}
    value={value}
    onChange={onChange}
    placeholder="0 - 999,999,999"
    withAsterisk={true}
  />
);
