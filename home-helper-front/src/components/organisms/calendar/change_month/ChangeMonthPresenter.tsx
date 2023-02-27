import { FC } from "react";

type ChangeMonthPresenterProps = {
  displayYearMonth: string;
};
export const ChangeMonthPresenter: FC<ChangeMonthPresenterProps> = ({
  displayYearMonth,
}) => (
  <div className={"grid grid-cols-5 text-3xl p-2"}>
    <div className={"col-span-1 text-center"}>
      <>前月</>
    </div>
    <div className={"col-span-3 text-center"}>
      <div>{displayYearMonth}</div>
    </div>
    <div className={"col-span-1 text-center"}>
      <>次月</>
    </div>
  </div>
);
