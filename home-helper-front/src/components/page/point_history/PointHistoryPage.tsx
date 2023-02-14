import { FC } from "react";
import { PointHistoryContainer } from "@components/organisms/point_history/PointHistoryContainer";
import { HomeHelperLayout } from "@components/atoms/Layout/HomeHelperLayout";

export const Page: FC = () => (
  <HomeHelperLayout>
    <PointHistoryContainer />
  </HomeHelperLayout>
);
