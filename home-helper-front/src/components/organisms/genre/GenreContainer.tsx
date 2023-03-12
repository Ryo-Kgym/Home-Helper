import { TableProps } from "@components/atoms/Table";
import { getLabel, IocomeType } from "@domain/model/household/IocomeType";
import { useGetCategoryTotalByMonth } from "@hooks/household/category/useGetCategoryTotalByMonth";
import { FC, useState } from "react";
import { Button } from "@components/atoms/Button";
import { DailyTableByCategory } from "@components/organisms/daily_table/category";
import { FormatPrice } from "@components/molecules/FormatPrice";
import { GenrePresenter } from "@components/organisms/genre/GenrePresenter";

export const GenreContainer: FC = () => {
  const [fromMonth, setFromMonth] = useState<Date | null>(new Date());
  const [toMonth, setToMonth] = useState<Date | null>(new Date());

  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("");
  const [openDailyDetail, setOpenDailyDetail] = useState(false);

  const [{ data }] = useGetCategoryTotalByMonth(fromMonth, toMonth);

  const tableProps: TableProps[] =
    data?.categoryTotalByMonthList?.map((category) => {
      return {
        keyPrefix: "genre",
        columns: [
          {
            value: getLabel(category?.iocomeType as IocomeType),
            align: "center",
          },
          { value: category?.genreName, align: "left" },
          { value: category?.categoryName, align: "left" },
          {
            value: (
              <FormatPrice
                iocomeType={category?.iocomeType!}
                price={category?.total!}
              />
            ),
            align: "right",
          },
          {
            value: (
              <Button
                label={"詳細"}
                colorType={"detail"}
                onClick={() => {
                  setSelectedCategoryId(category?.categoryId!);
                  setOpenDailyDetail(true);
                }}
              />
            ),
            align: "center",
          },
        ],
      };
    }) ?? [];

  if (openDailyDetail) {
    return (
      <DailyTableByCategory
        fromMonth={fromMonth!}
        toMonth={toMonth!}
        categoryId={selectedCategoryId}
      />
    );
  }

  const incomeTotal = data?.categoryTotalByMonthList
    ?.filter((c) => c!.iocomeType === IocomeType.Income)
    .reduce((a, b) => a + Number(b!.total!), 0);

  const outcomeTotal = data?.categoryTotalByMonthList
    ?.filter((c) => c!.iocomeType === IocomeType.Outcome)
    .reduce((a, b) => a + Number(b!.total!), 0);

  return (
    <GenrePresenter
      fromMonth={fromMonth}
      changeFromMonth={setFromMonth}
      toMonth={toMonth}
      changeToMonth={setToMonth}
      tableProps={tableProps}
      incomeTotal={incomeTotal}
      outcomeTotal={outcomeTotal}
    />
  );
};
