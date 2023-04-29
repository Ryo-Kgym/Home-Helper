import { TextInput } from "@components/atoms/TextInput";
import { FC } from "react";

type AccountNameInputPresenterProps = {
  accountName: string;
  setAccountName: (accountName: string) => void;
};

export const AccountNameInputPresenter: FC<AccountNameInputPresenterProps> = ({
  accountName,
  setAccountName,
}) => (
  <TextInput
    label={"ACCOUNT"}
    value={accountName}
    onChange={setAccountName}
    placeholder={"Account Name"}
    withAsterisk={true}
    maxLength={32}
  />
);
