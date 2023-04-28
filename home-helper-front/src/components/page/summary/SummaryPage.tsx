import { HouseHoldLayout } from "@components/atoms/Layout/HouseHoldLayout";
import { FC } from "react";
import { Summary } from "@components/organisms/summary";

export const Page: FC = () => {
  return (
    <HouseHoldLayout>
      <Summary />
    </HouseHoldLayout>
  );
};
