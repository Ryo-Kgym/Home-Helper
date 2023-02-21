import { FC } from "react";
import { Table, TableProps } from "@components/atoms/Table";

type Props = {
  tableProps: TableProps[];
};

const header = ["日付", "項目", "ためたポイント"];

export const ChargedPointHistoryPresenter: FC<Props> = ({ tableProps }) => {
  return <Table header={header} tablePropsList={tableProps} />;
};
