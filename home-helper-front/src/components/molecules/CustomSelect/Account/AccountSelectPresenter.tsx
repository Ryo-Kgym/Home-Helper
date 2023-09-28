/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { Select, SelectData } from "@components/ui";

type AccountSelectPresenterProps = {
  value: string | null;
  onChange: (_: string | null) => void;
  accounts: SelectData[];
};
export const AccountSelectPresenter = ({
  value,
  onChange,
  accounts,
}: AccountSelectPresenterProps) => (
  <Select
    label={"ACCOUNT"}
    value={value}
    onChange={onChange}
    data={accounts}
    placeholder={"アカウントを選択してください"}
    withAsterisk
  />
);
