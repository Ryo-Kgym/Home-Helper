import { FC } from "react";
import { ExchangePointContainer } from "@components/presenter/consume_point/ExchangePointContainer";
import { HomeHelperLayout } from "@components/ui/Layout/HomeHelperLayout";

export const Page: FC = () => (
  <HomeHelperLayout>
    <ExchangePointContainer />
  </HomeHelperLayout>
);
