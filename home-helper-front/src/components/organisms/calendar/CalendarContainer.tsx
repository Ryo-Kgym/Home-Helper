import type { FC } from "react";
import { CalendarPresenter } from "@components/organisms/calendar/CalendarPresenter";
import { useState } from "react";
import { createDateList } from "@components/organisms/calendar/createDateList";

type CalendarContainerProps = {};
export const CalendarContainer: FC<CalendarContainerProps> = () => {
  const [baseDate, setBaseDate] = useState(new Date());

  return (
    <CalendarPresenter
      baseDate={baseDate}
      setBaseDate={setBaseDate}
      dateList={createDateList(baseDate)}
    />
  );
};
