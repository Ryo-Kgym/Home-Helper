import { FC, useState } from "react";
import { DailyTablePresenter } from "./DailyTablePresenter";
import { useGetDailyDetailByDateQuery } from "@graphql/postgraphile/generated/graphql";
import { TableProps } from "@components/atoms/Table";
import { dailyDetailConverter } from "@components/atoms/Table/dailyDetailConverter";

type DailyTableContainerProps = {
  dailyDetail?: TableProps[];
};
export const DailyTableContainer: FC<DailyTableContainerProps> = ({
  dailyDetail,
}) => {
  const today = new Date();
  const thisFirstDay = new Date(today.getFullYear(), today.getMonth(), 1);

  const [fromDate, setFromDate] = useState<Date | null>(thisFirstDay);
  const [toDate, setToDate] = useState<Date | null>(new Date());

  const [{ data }] = useGetDailyDetailByDateQuery({
    variables: {
      fromDate: fromDate,
      toDate: toDate,
    },
  });

  const tableProps: TableProps[] = dailyDetail ?? dailyDetailConverter(data);
  return (
    <DailyTablePresenter
      fromDate={fromDate}
      changeFromDate={setFromDate}
      toDate={toDate}
      changeToDate={setToDate}
      tablePropsList={tableProps}
    />
  );
};
