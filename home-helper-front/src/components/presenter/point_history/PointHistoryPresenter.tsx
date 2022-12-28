import { FC } from "react";
import { Layout } from "@components/presenter/Layout";
import { Table } from "@mantine/core";

type PointHistoryPresenterProps = {};

type PointHistory = {
  date: Date;
  point: number;
};

const DATA: PointHistory[] = [
  {
    date: new Date(),
    point: 100,
  },
  {
    date: new Date(),
    point: 200,
  },
  {
    date: new Date(),
    point: -100,
  },
  {
    date: new Date(),
    point: 1000,
  },
];

export const PointHistoryPresenter: FC<PointHistoryPresenterProps> = () => {
  return (
    <Layout
      main={
        <>
          <HistoryTable data={DATA} />
        </>
      }
    />
  );
};

const HistoryTable = ({ data }: { data: PointHistory[] }) => (
  <Table striped highlightOnHover>
    <thead>
      <tr>
        <th>#</th>
        <th>日付</th>
        <th>ポイント</th>
      </tr>
    </thead>
    <tbody>
      {data.map((d, i) => {
        return (
          <tr key={"pointHistory" + i}>
            <td>{i}</td>
            <td>{d.date.toLocaleDateString()}</td>
            <td>{d.point.toLocaleString()}</td>
          </tr>
        );
      })}
    </tbody>
  </Table>
);
