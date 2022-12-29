import { FC } from "react";
import { PointHistoryContainer } from "@components/container/point_history/PointHistoryContainer";
import { HomeHelperLayout } from "@components/ui/Layout/HomeHelperLayout";

export const Page: FC = () => (
  <HomeHelperLayout body={<PointHistoryContainer />} />
);
