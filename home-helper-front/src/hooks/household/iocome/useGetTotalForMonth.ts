import { useGetTotalBetweenDateQuery } from "@graphql/postgraphile/generated/graphql";
import { createDateList } from "@components/organisms/calendar/createDateList";
import { DailyTotal } from "@domain/model/household/DailyTotal";
import { useDate } from "@hooks/date/useDate";

export const useGetTotalForMonth = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const firstDate = new Date(year, month, -firstDay + 1);
  const lastDate = new Date(year, month + 1, 0);

  const [{ data }, refetch] = useGetTotalBetweenDateQuery({
    variables: {
      fromDate: firstDate,
      toDate: lastDate,
    },
  });
  const { convertToYmd } = useDate();

  const dailyTotalList: DailyTotal[] = createDateList(date).map((date) => {
    const incomeTotal = data?.incomeTotalByDate?.find(
      (e) => e.date === convertToYmd(date)
    )?.total;
    const outcomeTotal = data?.outcomeTotalByDate?.find(
      (e) => e.date === convertToYmd(date)
    )?.total;

    return {
      date,
      incomeTotal: incomeTotal ? Number(incomeTotal) : undefined,
      outcomeTotal: outcomeTotal ? Number(outcomeTotal) : undefined,
    };
  });

  return {
    dailyTotalList,
    refetch: () => {
      refetch({ requestPolicy: "network-only" });
    },
    data,
  };
};
