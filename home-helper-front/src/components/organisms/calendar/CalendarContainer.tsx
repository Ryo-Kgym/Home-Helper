import type { FC } from "react";
import { CalendarPresenter } from "@components/organisms/calendar/CalendarPresenter";

type CalendarContainerProps = {};
export const CalendarContainer: FC<CalendarContainerProps> = () => {
  return <CalendarPresenter />;
};
