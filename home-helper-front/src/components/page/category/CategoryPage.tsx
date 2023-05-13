import { HouseHoldLayout } from "@components/atoms/Layout/HouseHoldLayout";
import { FC } from "react";
import { CategoryContainer } from "@components/organisms/category/CategoryContainer";

export const Page: FC = () => {
  return (
    <HouseHoldLayout>
      <CategoryContainer />
    </HouseHoldLayout>
  );
};
