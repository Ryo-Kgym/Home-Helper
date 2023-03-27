import { FC } from "react";
import { HouseHoldLayout } from "@components/atoms/Layout/HouseHoldLayout";
import { CreditCardTableContainer } from "@components/organisms/credit_card/CreditCardTableContainer";

export const Page: FC = () => (
  <HouseHoldLayout>
    <CreditCardTableContainer />
  </HouseHoldLayout>
);
