import { FC } from "react";
import { Table, TableProps } from "@components/atoms/Table";

type MonthlyCategoryPresenterProps = {
  tablePropsList: TableProps[];
};

export const MonthlyCategoryPresenter: FC<MonthlyCategoryPresenterProps> = ({
  tablePropsList,
}) => (
  <div>
    <Table
      header={[
        "カテゴリ",
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
        "合計",
      ]}
      tablePropsList={tablePropsList}
      size={"xs"}
      height={"75vh"}
      toBottom
    />
  </div>
);
