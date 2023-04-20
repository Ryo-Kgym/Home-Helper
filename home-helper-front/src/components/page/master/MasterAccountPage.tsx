import { HouseHoldLayout } from "@components/atoms/Layout/HouseHoldLayout";
import { FC } from "react";
import { SelectMaster } from "@components/organisms/master";

export const Page: FC = () => {
  return (
    <HouseHoldLayout>
      <SelectMaster selectValue={"account"}>{"アカウント"}</SelectMaster>
    </HouseHoldLayout>
  );
};
