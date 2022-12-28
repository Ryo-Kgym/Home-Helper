import { FC, useEffect, useState } from "react";
import {
  PointHistory,
  PointHistoryPresenter,
} from "@components/presenter/point_history/PointHistoryPresenter";

const DATA: PointHistory[] = [
  {
    date: new Date(),
    point: 100,
    itemName: "みずやり",
  },
  {
    date: new Date(),
    point: 200,
    itemName: "お皿洗い",
  },
  {
    date: new Date(),
    point: -100,
    itemName: "お菓子",
  },
  {
    date: new Date(),
    point: -1000,
    itemName: "おもちゃ",
  },
];

export const PointHistoryContainer: FC = () => {
  const [records, setRecords] = useState<PointHistory[]>([]);

  useEffect(() => {
    setRecords(DATA);
  }, []);

  return <PointHistoryPresenter records={records} />;
};
