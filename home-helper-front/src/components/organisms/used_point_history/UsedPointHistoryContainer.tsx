/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { FC, useEffect, useState } from "react";
import { PointHistory } from "@domain/model/home_helper/PointHistory";
import { TableProps } from "@components/atoms/Table";
import { UsedPointHistoryPresenter } from "./UsedPointHistoryPresenter";
import { useFetchHelpPointExchangedAchievements } from "@hooks/help_point/useFetchHelpPointExchangedAchievements";

export const UsedPointHistoryContainer: FC = () => {
  const [pointHistories, setPointHistories] = useState<PointHistory[]>([]);

  useEffect(() => {
    useFetchHelpPointExchangedAchievements().then((list) => {
      const pointHistories = list.map((exchangedAchievement) => {
        return {
          date: exchangedAchievement.exchangedDatetime,
          point: exchangedAchievement.exchangeItemById.point,
          count: exchangedAchievement.exchangeCount,
          totalPoint: exchangedAchievement.exchangeTotalPoint,
          itemName: exchangedAchievement.exchangeItemById.name,
        };
      });
      setPointHistories(pointHistories);
    });
  }, []);

  const tableProps: TableProps[] = pointHistories.map((pointHistory) => {
    return {
      keyPrefix: "usedPointHistory",
      columns: [
        { value: pointHistory.date.slice(0, 10) },
        { value: pointHistory.itemName },
        {
          value: formatPoint(pointHistory.point),
          align: "right",
        },
      ],
    };
  });

  return <UsedPointHistoryPresenter tableProps={tableProps} />;
};

const formatPoint = (point: number): string => {
  return point.toLocaleString() + process.env.NEXT_PUBLIC_POINT_UNIT;
};
