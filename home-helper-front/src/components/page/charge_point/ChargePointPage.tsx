import { FC } from "react";
import { ChargePointContainer } from "@components/organisms/charge_point/ChargePointContainer";
import { HomeHelperLayout } from "@components/atoms/Layout/HomeHelperLayout";

export const Page: FC = () => (
  <HomeHelperLayout>
    <ChargePointContainer />
  </HomeHelperLayout>
);
