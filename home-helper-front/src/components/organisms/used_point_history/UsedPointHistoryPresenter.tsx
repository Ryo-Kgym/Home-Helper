import { FC } from "react";
import { Table, TableProps } from "@components/atoms/Table";

type UsedPointHistoryPresenterProps = {
  tableProps: TableProps[];
};

const header = ["日付", "項目", "つかったポイント"];

export const UsedPointHistoryPresenter: FC<UsedPointHistoryPresenterProps> = ({
  tableProps,
}) => {
  return <Table header={header} tablePropsList={tableProps} />;
};
