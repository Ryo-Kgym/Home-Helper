/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { FC, useEffect, useState } from "react";
import { PointHistory } from "@domain/model/home_helper/PointHistory";
import { TableProps } from "@components/atoms/Table";
import { ChargedPointHistoryPresenter } from "./ChargedPointHistoryPresenter";
import { useFetchHelpPointEarnedAchievements } from "@hooks/help_point/useFetchHelpPointEarnedAchievements";

export const ChargedPointHistoryContainer: FC = () => {
  const [pointHistories, setPointHistories] = useState<PointHistory[]>([]);

  useEffect(() => {
    useFetchHelpPointEarnedAchievements().then((list) => {
      let pointHistories = list.flatMap((earnedAchievement) => {
        let date = earnedAchievement.earnedDate;
        return earnedAchievement.helpPointEarnedDetailByEarnedAchievementId.map(
          (earnedDetail) => {
            return {
              date: date,
              point: earnedDetail.helpItemByEarnedDetail.point,
              count: earnedDetail.helpItemCount,
              totalPoint: earnedDetail.helpItemTotalPoint,
              itemName: earnedDetail.helpItemByEarnedDetail.name,
            };
          }
        );
      });
      setPointHistories(pointHistories);
    });
  }, []);

  const tableProps: TableProps[] = pointHistories.map((pointHistory) => {
    return {
      keyPrefix: "chargedPointHistory",
      columns: [
        { value: pointHistory.date },
        { value: pointHistory.itemName },
        {
          value: formatPoint(pointHistory.totalPoint),
          align: "right",
        },
      ],
    };
  });

  return <ChargedPointHistoryPresenter tableProps={tableProps} />;
};

const formatPoint = (point: number): string => {
  return point.toLocaleString() + process.env.NEXT_PUBLIC_POINT_UNIT;
};
