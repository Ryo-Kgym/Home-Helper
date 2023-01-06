import { FC, useEffect, useState } from "react";
import { PointHistoryPresenter } from "@components/presenter/point_history/PointHistoryPresenter";
import { PointHistory } from "@domain/model/home_helper/PointHistory";
import { TbodyProps } from "@components/ui/Table";

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
  const [pointHistories, setPointHistories] = useState<PointHistory[]>([]);

  useEffect(() => {
    setPointHistories(DATA);
  }, []);

  const tbodyProps: TbodyProps[] = pointHistories.map((pointHistory) => {
    return {
      keyPrefix: "pointHistory",
      columns: [
        { value: pointHistory.date.toLocaleDateString() },
        {
          value: formatPoint(pointHistory.point),
          align: "right",
        },
        { value: pointHistory.itemName },
      ],
    };
  });

  return <PointHistoryPresenter tbodyProps={tbodyProps} />;
};

const formatPoint = (point: number): string => {
  return point.toLocaleString() + process.env.NEXT_PUBLIC_POINT_UNIT;
};
