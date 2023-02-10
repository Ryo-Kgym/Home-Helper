import { FC } from "react";
import { HouseHoldContainer } from "@components/organisms/house_hold/HouseHoldContainer";
import { HouseHoldLayout } from "@components/atoms/Layout/HouseHoldLayout";

export const Page: FC = () => (
  <HouseHoldLayout navHidden>
    <HouseHoldContainer />
  </HouseHoldLayout>
);
