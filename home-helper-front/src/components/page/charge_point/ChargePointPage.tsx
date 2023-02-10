import { FC } from "react";
import { ChargePointContainer } from "@components/presenter/charge_point/ChargePointContainer";
import { HomeHelperLayout } from "@components/atoms/Layout/HomeHelperLayout";

export const Page: FC = () => (
  <HomeHelperLayout>
    <ChargePointContainer />
  </HomeHelperLayout>
);
