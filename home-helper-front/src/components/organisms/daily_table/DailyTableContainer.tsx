import { FC, useState } from "react";
import { DailyTablePresenter } from "./DailyTablePresenter";
import { TableProps } from "@components/atoms/Table";
import { dailyDetailConverter } from "@components/atoms/Table/dailyDetailConverter";
import { useGetDailyDetailByDate } from "@hooks/household/daily_detail/useGetDailyDetailByDate";

type DailyTableContainerProps = {
  dailyDetail?: TableProps[];
  defaultFromDate?: Date;
  defaultToDate?: Date;
  defaultIncomeTotal?: number;
  defaultOutcomeTotal?: number;
};
export const DailyTableContainer: FC<DailyTableContainerProps> = ({
  dailyDetail,
  defaultFromDate,
  defaultToDate,
  defaultIncomeTotal,
  defaultOutcomeTotal,
}) => {
  const today = new Date();
  const thisFirstDay = new Date(today.getFullYear(), today.getMonth(), 1);

  const [fromDate, setFromDate] = useState<Date | null>(
    defaultFromDate ?? thisFirstDay
  );
  const [toDate, setToDate] = useState<Date | null>(
    defaultToDate ?? new Date()
  );

  const { data, incomeTotal, outcomeTotal } = useGetDailyDetailByDate(
    fromDate,
    toDate
  );

  const tableProps: TableProps[] = dailyDetail ?? dailyDetailConverter(data);

  const disabled = dailyDetail?.length != undefined;

  return (
    <DailyTablePresenter
      fromDate={fromDate}
      changeFromDate={setFromDate}
      toDate={toDate}
      changeToDate={setToDate}
      tablePropsList={tableProps}
      incomeTotal={defaultIncomeTotal ?? incomeTotal}
      outcomeTotal={defaultOutcomeTotal ?? outcomeTotal}
      disabled={disabled}
    />
  );
};
