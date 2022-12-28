import { FC } from "react";
import { PointHistoryPresenter } from "@components/presenter/point_history/PointHistoryPresenter";

type PointHistoryContainerProps = {};

export const PointHistoryContainer: FC<PointHistoryContainerProps> = () => {
  return <PointHistoryPresenter />;
};
