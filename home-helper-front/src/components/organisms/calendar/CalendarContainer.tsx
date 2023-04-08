import type { FC } from "react";
import { useState } from "react";
import { CalendarPresenter } from "@components/organisms/calendar/CalendarPresenter";
import { useGetTotalForMonth } from "@hooks/household/iocome/useGetTotalForMonth";

type CalendarContainerProps = {};
export const CalendarContainer: FC<CalendarContainerProps> = () => {
  const [baseDate, setBaseDate] = useState<Date | null>(new Date());

  const { dailyTotalList, refetch } = useGetTotalForMonth(baseDate!);

  return (
    <CalendarPresenter
      baseDate={baseDate}
      setBaseDate={setBaseDate}
      dailyTotalList={dailyTotalList}
      refetch={refetch}
    />
  );
};
