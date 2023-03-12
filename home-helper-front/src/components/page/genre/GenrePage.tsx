import { HouseHoldLayout } from "@components/atoms/Layout/HouseHoldLayout";
import { FC } from "react";
import { Split } from "@components/atoms/Split";
import { CalendarContainer } from "@components/organisms/calendar/CalendarContainer";
import { GenreContainer } from "@components/organisms/genre/GenreContainer";

export const Page: FC = () => {
  return (
    <HouseHoldLayout>
      <Split
        size={35}
        first={<CalendarContainer />}
        second={<GenreContainer />}
      />
    </HouseHoldLayout>
  );
};
