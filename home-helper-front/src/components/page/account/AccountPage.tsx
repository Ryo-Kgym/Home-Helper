import { HouseHoldLayout } from "@components/atoms/Layout/HouseHoldLayout";
import { AccountContainer } from "@components/organisms/account/AccountContainer";
import { FC } from "react";

export const Page: FC = () => {
  return (
    <HouseHoldLayout>
      <AccountContainer />
    </HouseHoldLayout>
  );
};
