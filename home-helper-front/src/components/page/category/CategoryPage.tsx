import { HouseHoldLayout } from "@components/atoms/Layout/HouseHoldLayout";
import { FC } from "react";
import { Split } from "@components/atoms/Split";
import { CategoryContainer } from "@components/organisms/category/CategoryContainer";

export const Page: FC = () => {
  return (
    <HouseHoldLayout>
      <Split first={<CategoryContainer />} second={<CategoryContainer />} />
    </HouseHoldLayout>
  );
};
