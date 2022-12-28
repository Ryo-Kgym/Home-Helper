import { FC } from "react";
import { Table } from "@mantine/core";

type PointHistoryPresenterProps = {
  records: PointHistory[];
};

export type PointHistory = {
  date: Date;
  point: number;
  itemName: string;
};

export const PointHistoryPresenter: FC<PointHistoryPresenterProps> = ({
  records,
}) => <PointHistoryTable records={records} />;

const PointHistoryTable = ({ records }: { records: PointHistory[] }) => (
  <Table striped highlightOnHover>
    <thead>
      <tr>
        <th>#</th>
        <th>日付</th>
        <th>ポイント</th>
        <th>項目</th>
      </tr>
    </thead>
    <tbody>
      {records.map((d, i) => {
        return (
          <tr key={"pointHistory" + i}>
            <td>{i}</td>
            <td>{d.date.toLocaleDateString()}</td>
            <td>{d.point.toLocaleString()}</td>
            <td>{d.itemName}</td>
          </tr>
        );
      })}
    </tbody>
  </Table>
);
