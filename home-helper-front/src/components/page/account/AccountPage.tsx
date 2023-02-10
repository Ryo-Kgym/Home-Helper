import { HouseHoldLayout } from "@components/atoms/Layout/HouseHoldLayout";
import { AccountContainer } from "@components/organisms/account/AccountContainer";
import { FC } from "react";
import { Split } from "@components/atoms/Split";

export const Page: FC = () => {
  return (
    <HouseHoldLayout>
      <Split first={<AccountContainer />} second={<AccountContainer />} />
    </HouseHoldLayout>
  );
};
