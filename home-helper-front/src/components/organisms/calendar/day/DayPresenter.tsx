import { FC } from "react";

type DayPresenterProps = {
  displayDay: string;
};
export const DayPresenter: FC<DayPresenterProps> = ({ displayDay }) => {
  return (
    <div className={"h-32 border-r-2 border-b-2"}>
      <div className={"p-2"}>{displayDay}</div>
    </div>
  );
};
