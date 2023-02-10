import { FC } from "react";
import { HouseHoldContainer } from "@components/presenter/house_hold/HouseHoldContainer";
import { HouseHoldLayout } from "@components/atoms/Layout/HouseHoldLayout";

export const Page: FC = () => (
  <HouseHoldLayout navHidden>
    <HouseHoldContainer />
  </HouseHoldLayout>
);
