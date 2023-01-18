import { FC, useEffect, useState } from "react";
import { PointHistory } from "@domain/model/home_helper/PointHistory";
import { TbodyProps } from "@components/ui/Table";
import { UsedPointHistoryPresenter } from "@components/presenter/used_point_history/UsedPointHistoryPresenter";

const DATA: PointHistory[] = [
  {
    date: "2023-01-18",
    point: -100,
    count: 10,
    totalPoint: -1000,
    itemName: "お菓子",
  },
  {
    date: "2023-01-18",
    point: -1000,
    count: 2,
    totalPoint: -2000,
    itemName: "おもちゃ",
  },
];

export const UsedPointHistoryContainer: FC = () => {
  const [pointHistories, setPointHistories] = useState<PointHistory[]>([]);

  useEffect(() => {
    setPointHistories(DATA);
  }, []);

  const tbodyProps: TbodyProps[] = pointHistories.map((pointHistory) => {
    return {
      keyPrefix: "usedPointHistory",
      columns: [
        { value: pointHistory.date },
        {
          value: formatPoint(pointHistory.point),
          align: "right",
        },
        { value: pointHistory.itemName },
      ],
    };
  });

  return <UsedPointHistoryPresenter tbodyProps={tbodyProps} />;
};

const formatPoint = (point: number): string => {
  return point.toLocaleString() + process.env.NEXT_PUBLIC_POINT_UNIT;
};
