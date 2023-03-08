import { FC } from "react";
import { Table, TableProps } from "@components/atoms/Table";

type DailyTablePresenterProps = {
  tablePropsList: TableProps[];
};
export const DailyTablePresenter: FC<DailyTablePresenterProps> = ({
  tablePropsList,
}) => (
  <Table
    header={["日付", "ジャンル", "カテゴリ", "アカウント", "金額", "メモ"]}
    tablePropsList={tablePropsList}
    size={"xs"}
  />
);
