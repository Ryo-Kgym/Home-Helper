import { HouseHoldLayout } from "@components/atoms/Layout/HouseHoldLayout";
import { FC } from "react";
import { Split } from "@components/atoms/Split";
import { CalendarContainer } from "@components/organisms/calendar/CalendarContainer";
import { DailySearchContainer } from "@components/organisms/daily_table/DailySearchContainer";

export const Page: FC = () => {
  return (
    <HouseHoldLayout>
      <Split
        size={50}
        first={<CalendarContainer />}
        second={<DailySearchContainer />}
      />
    </HouseHoldLayout>
  );
};
