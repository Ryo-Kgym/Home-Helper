import { FC } from "react";
import { Select } from "@components/atoms/Select";
import { SelectData } from "@components/atoms/Select/SelectPresenter";

type AccountSelectPresenterProps = {
  value: string | null;
  onChange: (value: string | null) => void;
  accounts: SelectData[];
};
export const AccountSelectPresenter: FC<AccountSelectPresenterProps> = ({
  value,
  onChange,
  accounts,
}) => (
  <Select
    label={"ACCOUNT"}
    value={value}
    onChange={onChange}
    data={accounts}
    placeholder={"アカウントを選択してください"}
  />
);
