import { FC } from "react";
import { ExchangePointContainer } from "@components/container/consume_point/ExchangePointContainer";
import { HomeHelperLayout } from "@components/ui/Layout/HomeHelperLayout";

export const Page: FC = () => (
  <HomeHelperLayout body={<ExchangePointContainer />} />
);
