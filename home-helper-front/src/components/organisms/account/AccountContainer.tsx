import { AccountPresenter } from "@components/organisms/account/AccountPresenter";
import { TbodyProps } from "@components/atoms/Table";
import { Account } from "@domain/model/household/Account";

export const AccountContainer = () => {
  const tbodyProps: TbodyProps[] = mockAccount.map((account) => {
    return {
      keyPrefix: "account",
      columns: [
        { value: account.accountName, align: "left" },
        { value: account.balance.toLocaleString(), align: "right" },
      ],
    };
  });

  return <AccountPresenter tbodyProps={tbodyProps} />;
};

const mockAccount: Account[] = [
  { accountId: "1", accountName: "財布1", balance: 10000 },
  { accountId: "2", accountName: "財布2", balance: 5000 },
  { accountId: "3", accountName: "A銀行", balance: 100000 },
  { accountId: "4", accountName: "B銀行", balance: 200000 },
];
