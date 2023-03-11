import { TableProps } from "@components/atoms/Table";
import { CategoryPresenter } from "@components/organisms/category/CategoryPresenter";
import { getLabel, IocomeType } from "@domain/model/household/IocomeType";
import { useGetCategoryTotalByMonth } from "@hooks/household/category/useGetCategoryTotalByMonth";
import { FC, useState } from "react";
import { Button } from "@components/atoms/Button";
import { DailyTableByCategory } from "@components/organisms/daily_table/category";

export const CategoryContainer: FC = () => {
  const [date, setDate] = useState<Date | null>(new Date());
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("");
  const [openDailyDetail, setOpenDailyDetail] = useState(false);

  const [{ data }] = useGetCategoryTotalByMonth(date!);

  const tableProps: TableProps[] =
    data?.categoryTotalByMonthList?.map((category) => {
      return {
        keyPrefix: "category",
        columns: [
          {
            value: getLabel(category?.iocomeType as IocomeType),
            align: "center",
          },
          { value: category?.genreName, align: "left" },
          { value: category?.categoryName, align: "left" },
          {
            value: formatTotal(category?.iocomeType!, category?.total!),
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
      <DailyTableByCategory date={date!} categoryId={selectedCategoryId} />
    );
  }

  const incomeTotal = data?.categoryTotalByMonthList
    ?.filter((c) => c!.iocomeType === IocomeType.Income)
    .reduce((a, b) => a + Number(b!.total!), 0);

  const outcomeTotal = data?.categoryTotalByMonthList
    ?.filter((c) => c!.iocomeType === IocomeType.Outcome)
    .reduce((a, b) => a + Number(b!.total!), 0);

  return (
    <CategoryPresenter
      date={date}
      changeDate={setDate}
      tableProps={tableProps}
      incomeTotal={incomeTotal}
      outcomeTotal={outcomeTotal}
    />
  );
};

const formatTotal = (iocomeType: IocomeType, total: number) => {
  const price = Number(total).toLocaleString();

  if (iocomeType === IocomeType.Income) {
    return <div className={"text-green-600"}>{price}</div>;
  }
  return <div className={"text-red-400"}>{"(" + price + ")"}</div>;
};
