import { HouseHoldLayout } from "@components/atoms/Layout/HouseHoldLayout";
import { AccountContainer } from "@components/organisms/account/AccountContainer";
import { FC } from "react";
import { Split } from "@components/atoms/Split";
import { CalendarContainer } from "@components/organisms/calendar/CalendarContainer";

export const Page: FC = () => {
  return (
    <HouseHoldLayout>
      <Split first={<CalendarContainer />} second={<AccountContainer />} />
    </HouseHoldLayout>
  );
};
