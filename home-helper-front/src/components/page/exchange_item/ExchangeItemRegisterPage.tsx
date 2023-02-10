import { FC } from "react";
import { HomeHelperLayout } from "@components/atoms/Layout/HomeHelperLayout";
import { ExchangeItemRegisterContainer } from "@components/presenter/exchange_item/register/ExchangeItemRegisterContainer";

export const Page: FC = () => (
  <HomeHelperLayout>
    <ExchangeItemRegisterContainer />
  </HomeHelperLayout>
);
