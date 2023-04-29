import { Table, TableProps } from "@components/atoms/Table";
import { IocomeTotal } from "@components/molecules/Total";
import { FC } from "react";

type DailyTableProps = {
  tablePropsList: TableProps[];
  incomeTotal: number | undefined;
  outcomeTotal: number | undefined;
};
export const DailyTable: FC<DailyTableProps> = ({
  tablePropsList,
  incomeTotal,
  outcomeTotal,
}) => {
  return (
    <>
      <Table
        header={["日付", "ジャンル", "カテゴリ", "アカウント", "金額", "メモ"]}
        tablePropsList={tablePropsList}
        size={"xs"}
        height={"75vh"}
        toBottom
      />
      <IocomeTotal income={incomeTotal} outcome={outcomeTotal} />
    </>
  );
};
