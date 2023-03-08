import { HouseHoldLayout } from "@components/atoms/Layout/HouseHoldLayout";
import { FC } from "react";
import { Split } from "@components/atoms/Split";
import { CategoryContainer } from "@components/organisms/category/CategoryContainer";
import { CalendarContainer } from "@components/organisms/calendar/CalendarContainer";

export const Page: FC = () => {
  return (
    <HouseHoldLayout>
      <Split first={<CalendarContainer />} second={<CategoryContainer />} />
    </HouseHoldLayout>
  );
};
