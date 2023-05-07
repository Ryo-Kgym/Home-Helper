import { FC } from "react";
import { Table, TableProps } from "@components/atoms/Table";

type MonthlyCategoryPresenterProps = {
  tablePropsList: TableProps[];
  monthNames: string[];
};

export const MonthlyCategoryPresenter: FC<MonthlyCategoryPresenterProps> = ({
  tablePropsList,
  monthNames,
}) => (
  <div>
    <Table
      header={["カテゴリ"].concat(monthNames).concat("合計")}
      tablePropsList={tablePropsList}
      size={"xs"}
      height={"75vh"}
      toBottom
    />
  </div>
);
