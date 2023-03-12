import { AccountPresenter } from "@components/organisms/account/AccountPresenter";
import { TableProps } from "@components/atoms/Table";
import { useState } from "react";
import { useGetAccountBalanceList } from "@hooks/household/account/useGetAccountBalanceList";

export const AccountContainer = () => {
  const today = new Date();
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(today);

  const { data, total } = useGetAccountBalanceList(fromDate, toDate!);

  const tableProps: TableProps[] =
    data?.accountTotalList?.map((account) => {
      return {
        keyPrefix: "account",
        columns: [
          { value: account?.accountName, align: "left" },
          {
            value: Number(account?.total).toLocaleString(),
            align: "right",
          },
        ],
      };
    }) ?? [];

  return (
    <AccountPresenter
      fromDate={fromDate}
      changeFromDate={setFromDate}
      toDate={toDate}
      changeToDate={setToDate}
      tableProps={tableProps}
      total={total}
    />
  );
};
