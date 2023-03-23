import { FC } from "react";
import { TableProps } from "@components/atoms/Table";
import { DailyTableByCategoryPresenter } from "./DailyTableByCategoryPresenter";
import { dailyDetailConverter } from "@components/organisms/daily_table/dailyDetailConverter";
import { useGetDailyDetailByDateCategoryId } from "@hooks/household/daily_detail/useGetDailyDetailByDateCategoryId";

type DailyTableByCategoryContainerProps = {
  fromMonth: Date;
  toMonth: Date;
  categoryId: string;
};
export const DailyTableByCategoryContainer: FC<
  DailyTableByCategoryContainerProps
> = ({ fromMonth, toMonth, categoryId }) => {
  const firstDay = new Date(fromMonth.getFullYear(), fromMonth.getMonth(), 1);
  const lastDay = new Date(toMonth.getFullYear(), toMonth.getMonth() + 1, 0);

  const { data, incomeTotal, outcomeTotal } = useGetDailyDetailByDateCategoryId(
    categoryId,
    firstDay,
    lastDay
  );

  const tableProps: TableProps[] = dailyDetailConverter(data);

  return (
    <DailyTableByCategoryPresenter
      firstDay={firstDay}
      lastDay={lastDay}
      tableProps={tableProps}
      incomeTotal={incomeTotal}
      outcomeTotal={outcomeTotal}
    />
  );
};
