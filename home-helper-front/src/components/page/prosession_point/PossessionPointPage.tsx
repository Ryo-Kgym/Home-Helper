import { FC } from "react";
import { PossessionPointContainer } from "@components/presenter/possession_point/PossessionPointContainer";
import { HomeHelperLayout } from "@components/ui/Layout/HomeHelperLayout";

export const Page: FC = () => (
  <HomeHelperLayout>
    <PossessionPointContainer />
  </HomeHelperLayout>
);
