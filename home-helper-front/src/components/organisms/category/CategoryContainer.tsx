import { TableProps } from "@components/atoms/Table";
import { CategoryPresenter } from "@components/organisms/category/CategoryPresenter";
import { useGetCategoryTotalByMonth } from "@hooks/household/category/useGetCategoryTotalByMonth";
import { FC, useState } from "react";
import { Button } from "@components/atoms/Button";
import { DailyTableByCategory } from "@components/organisms/daily_table/category";
import { FormatPrice } from "@components/molecules/FormatPrice";

export const CategoryContainer: FC = () => {
  const [fromMonth, setFromMonth] = useState<Date | null>(new Date());
  const [toMonth, setToMonth] = useState<Date | null>(new Date());

  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("");
  const [openDailyDetail, setOpenDailyDetail] = useState(false);

  const { data, incomeTotal, outcomeTotal } = useGetCategoryTotalByMonth(
    fromMonth,
    toMonth
  );

  const tableProps: TableProps[] =
    data?.categoryTotalByMonthList?.map((category) => {
      return {
        keyPrefix: "category",
        columns: [
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

  return (
    <CategoryPresenter
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
