"use client";

import { TableProps } from "@components/atoms/Table";
import { IocomeType } from "@domain/model/household/IocomeType";
import { FC, useState } from "react";
import { FormatPrice } from "@components/molecules/FormatPrice";
import { GenrePresenter } from "@components/organisms/genre/GenrePresenter";
import { useGetGenreTotalByMonth } from "@hooks/household/genre/useGetGenreTotalByMonth";
import { DailyTableByGenre } from "@components/organisms/daily_table/genre";
import { useGetCreditCardSummaryBetweenMonth } from "@hooks/household/credit_card/useGetCreditCardSummaryBetweenMonth";
import { ResponsiveSwitcher } from "@components/page/ResponsiveSwitcher";

export const GenreContainer: FC = () => {
  const [fromMonth, setFromMonth] = useState<Date | null>(new Date());
  const [toMonth, setToMonth] = useState<Date | null>(new Date());

  const [selectedGenreId, setSelectedGenreId] = useState<string>("");

  const { data, incomeTotal, outcomeTotal } = useGetGenreTotalByMonth(
    fromMonth,
    toMonth,
  );

  const {
    data: creditCardSummaryData,
    incomeTotal: creditCardIncomeTotal,
    outcomeTotal: creditCardOutcomeTotal,
  } = useGetCreditCardSummaryBetweenMonth(fromMonth, toMonth);

  const tableProps: TableProps[] =
    data?.genreTotalByMonthList?.map((genre) => {
      return {
        keyPrefix: "genre",
        columns: [
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
        ],
        onClick: () => {
          setSelectedGenreId(genre?.genreId!);
        },
      };
    }) ?? [];

  const creditCardTableProps: TableProps[] =
    creditCardSummaryData?.allCreditCardSummariesList?.map((summary) => {
      return {
        keyPrefix: "creditCardSummary",
        columns: [
          {
            value: summary.creditCard,
          },
          {
            value: (
              <FormatPrice
                price={summary.totalAmount!}
                iocomeType={IocomeType.Outcome}
              />
            ),
            align: "right",
          },
        ],
      };
    }) ?? [];

  return (
    <ResponsiveSwitcher
      first={
        <GenrePresenter
          fromMonth={fromMonth}
          changeFromMonth={setFromMonth}
          toMonth={toMonth}
          changeToMonth={setToMonth}
          tableProps={tableProps.concat(creditCardTableProps)}
          incomeTotal={incomeTotal! + creditCardIncomeTotal!}
          outcomeTotal={outcomeTotal! + creditCardOutcomeTotal!}
        />
      }
      second={
        <DailyTableByGenre
          fromMonth={fromMonth!}
          toMonth={toMonth!}
          genreId={selectedGenreId}
        />
      }
    />
  );
};
