import { HouseHoldLayout } from "@components/atoms/Layout/HouseHoldLayout";
import { FC } from "react";
import { SelectMaster } from "@components/organisms/master";
import { SummaryCategory } from "@components/organisms/master/summary_category";

export const Page: FC = () => {
  return (
    <HouseHoldLayout>
      <SelectMaster selectValue={"summaryCategory"}>
        <SummaryCategory />
      </SelectMaster>
    </HouseHoldLayout>
  );
};
