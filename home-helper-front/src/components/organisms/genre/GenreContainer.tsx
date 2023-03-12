import { TableProps } from "@components/atoms/Table";
import { getLabel, IocomeType } from "@domain/model/household/IocomeType";
import { FC, useState } from "react";
import { Button } from "@components/atoms/Button";
import { DailyTableByCategory } from "@components/organisms/daily_table/category";
import { FormatPrice } from "@components/molecules/FormatPrice";
import { GenrePresenter } from "@components/organisms/genre/GenrePresenter";
import { useGetGenreTotalByMonth } from "@hooks/household/genre/useGetGenreTotalByMonth";

export const GenreContainer: FC = () => {
  const [fromMonth, setFromMonth] = useState<Date | null>(new Date());
  const [toMonth, setToMonth] = useState<Date | null>(new Date());

  const [selectedGenreId, setSelectedGenreId] = useState<string>("");
  const [openDailyDetail, setOpenDailyDetail] = useState(false);

  const { data, incomeTotal, outcomeTotal } = useGetGenreTotalByMonth(
    fromMonth,
    toMonth
  );

  const tableProps: TableProps[] =
    data?.genreTotalByMonthList?.map((genre) => {
      return {
        keyPrefix: "genre",
        columns: [
          {
            value: getLabel(genre?.iocomeType as IocomeType),
            align: "center",
          },
          { value: genre?.genreName, align: "left" },
          {
            value: (
              <FormatPrice
                iocomeType={genre?.iocomeType!}
                price={genre?.total!}
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
                  setSelectedGenreId(genre?.genreId!);
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
        categoryId={selectedGenreId}
      />
    );
  }

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
