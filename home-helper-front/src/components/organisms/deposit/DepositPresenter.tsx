/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { MonthlyDeposit } from "@hooks/household/deposit/monthlyDeposit";
import { Table, TableProps } from "@components/atoms/Table";

export const DepositPresenter = ({
  header,
  tablePropsList,
}: {
  header: string[];
  tablePropsList: TableProps[];
}) => (
  <div>
    <Table header={header} tablePropsList={tablePropsList} />
  </div>
);
