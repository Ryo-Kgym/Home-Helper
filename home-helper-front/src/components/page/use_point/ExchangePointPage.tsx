import { FC } from "react";
import { ExchangePointContainer } from "@components/organisms/consume_point/ExchangePointContainer";
import { HomeHelperLayout } from "@components/atoms/Layout/HomeHelperLayout";

export const Page: FC = () => (
  <HomeHelperLayout>
    <ExchangePointContainer />
  </HomeHelperLayout>
);
