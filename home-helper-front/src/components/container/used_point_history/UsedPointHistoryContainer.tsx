import { FC, useEffect, useState } from "react";
import { PointHistory } from "@domain/model/home_helper/PointHistory";
import { TbodyProps } from "@components/ui/Table";
import { UsedPointHistoryPresenter } from "@components/presenter/used_point_history/UsedPointHistoryPresenter";

const DATA: PointHistory[] = [
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

export const UsedPointHistoryContainer: FC = () => {
  const [pointHistories, setPointHistories] = useState<PointHistory[]>([]);

  useEffect(() => {
    setPointHistories(DATA);
  }, []);

  const tbodyProps: TbodyProps[] = pointHistories.map((pointHistory) => {
    return {
      keyPrefix: "usedPointHistory",
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

  return <UsedPointHistoryPresenter tbodyProps={tbodyProps} />;
};

const formatPoint = (point: number): string => {
  return point.toLocaleString() + process.env.NEXT_PUBLIC_POINT_UNIT;
};
