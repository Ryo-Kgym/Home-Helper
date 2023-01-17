import { FC, useEffect, useState } from "react";
import { PointHistory } from "@domain/model/home_helper/PointHistory";
import { TbodyProps } from "@components/ui/Table";
import { ChargedPointHistoryPresenter } from "@components/presenter/charged_point_history/ChargedPointHistoryPresenter";
import { fetchHelpPointEarnedAchievements } from "@hooks/help_point/fetchHelpPointEarnedAchievements";

export const ChargedPointHistoryContainer: FC = () => {
  const [pointHistories, setPointHistories] = useState<PointHistory[]>([]);

  useEffect(() => {
    fetchHelpPointEarnedAchievements().then((list) => {
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

  const tbodyProps: TbodyProps[] = pointHistories.map((pointHistory) => {
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

  return <ChargedPointHistoryPresenter tbodyProps={tbodyProps} />;
};

const formatPoint = (point: number): string => {
  return point.toLocaleString() + process.env.NEXT_PUBLIC_POINT_UNIT;
};
