import { HouseHoldLayout } from "@components/atoms/Layout/HouseHoldLayout";
import { FC } from "react";
import { Split } from "@components/atoms/Split";
import { CalendarContainer } from "@components/organisms/calendar/CalendarContainer";
import { DailyTableContainer } from "@components/organisms/daily_table/DailyTableContainer";

export const Page: FC = () => {
  return (
    <HouseHoldLayout>
      <Split first={<CalendarContainer />} second={<DailyTableContainer />} />
    </HouseHoldLayout>
  );
};
