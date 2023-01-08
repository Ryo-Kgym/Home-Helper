import { FC, useEffect, useState } from "react";
import { PointHistory } from "@domain/model/home_helper/PointHistory";
import { TbodyProps } from "@components/ui/Table";
import { ChargedPointHistoryPresenter } from "@components/presenter/charged_point_history/ChargedPointHistoryPresenter";

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
];

export const ChargedPointHistoryContainer: FC = () => {
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

  return <ChargedPointHistoryPresenter tbodyProps={tbodyProps} />;
};

const formatPoint = (point: number): string => {
  return point.toLocaleString() + process.env.NEXT_PUBLIC_POINT_UNIT;
};
