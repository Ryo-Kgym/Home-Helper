import { FC } from "react";
import { HouseHoldContainer } from "@components/container/house_hold/HouseHoldContainer";
import { HouseHoldLayout } from "@components/ui/Layout/HouseHoldLayout";

export const Page: FC = () => (
  <HouseHoldLayout body={<HouseHoldContainer />} navHidden />
);
