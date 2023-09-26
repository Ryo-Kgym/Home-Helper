/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { ColumnProps, Table, TableProps } from "@components/atoms/Table/index";
import { FC } from "react";

type MonthlyCategoryPresenterProps = {
  tablePropsList: TableProps[];
  footer: ColumnProps[][];
  monthNames: string[];
};

export const MonthlyCategoryPresenter: FC<MonthlyCategoryPresenterProps> = ({
  tablePropsList,
  footer,
  monthNames,
}) => (
  <div>
    <Table
      header={["カテゴリ"].concat(monthNames).concat("合計")}
      tablePropsList={tablePropsList}
      footer={footer}
      size={"xs"}
      height={"75vh"}
      toBottom
    />
  </div>
);