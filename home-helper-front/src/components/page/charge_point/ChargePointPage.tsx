import { FC } from "react";
import { ChargePointContainer } from "@components/container/charge_point/ChargePointContainer";
import { HomeHelperLayout } from "@components/ui/Layout/HomeHelperLayout";

export const Page: FC = () => (
  <HomeHelperLayout>
    <ChargePointContainer />
  </HomeHelperLayout>
);
