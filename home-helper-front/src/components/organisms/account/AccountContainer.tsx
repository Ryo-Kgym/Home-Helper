import { AccountPresenter } from "@components/organisms/account/AccountPresenter";
import { TableProps } from "@components/atoms/Table";
import { useState } from "react";
import { useGetAccountBalanceList } from "@hooks/household/account/useGetAccountBalanceList";
import { Button } from "@components/atoms/Button";
import { DailyTableByAccount } from "@components/organisms/daily_table/account";

export const AccountContainer = () => {
  const today = new Date();
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(today);
  const [openDailyDetail, setOpenDailyDetail] = useState(false);
  const [selectedAccountId, setSelectedAccountId] = useState<string>("");

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
          {
            value: (
              <Button
                colorType={"detail"}
                label={"詳細"}
                onClick={() => {
                  setSelectedAccountId(account?.accountId!);
                  setOpenDailyDetail(true);
                }}
              />
            ),
            align: "center",
          },
        ],
      };
    }) ?? [];

  if (openDailyDetail) {
    return (
      <DailyTableByAccount
        fromDate={fromDate ?? new Date("2019-01-01")}
        toDate={toDate!}
        accountId={selectedAccountId}
      />
    );
  }

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
