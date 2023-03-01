import { FC } from "react";
import { Select } from "@components/atoms/Select";
import { ItemProps } from "@components/atoms/Select/SelectPresenter";

type AccountSelectPresenterProps = {
  accounts: ItemProps[];
};
export const AccountSelectPresenter: FC<AccountSelectPresenterProps> = ({
  accounts,
}) => <Select label={"ACCOUNT"} data={accounts} />;
