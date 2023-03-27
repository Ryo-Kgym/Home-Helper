import { useGetTotalBetweenDateQuery } from "@graphql/postgraphile/generated/graphql";
import { createDateList } from "@components/organisms/calendar/createDateList";
import { DailyTotal } from "@domain/model/household/DailyTotal";

export const useGetTotalForMonth = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const firstDate = new Date(year, month, firstDay + 1);
  const lastDate = new Date(year, month + 1, 0);

  const [{ data }, refetch] = useGetTotalBetweenDateQuery({
    variables: {
      fromDate: firstDate,
      toDate: lastDate,
    },
  });

  const dailyTotalList: DailyTotal[] = createDateList(date).map((date) => {
    const incomeTotal = data?.incomeTotalByDate?.find(
      (e) => e.date === date.toISOString().slice(0, 10)
    )?.total;
    const outcomeTotal = data?.outcomeTotalByDate?.find(
      (e) => e.date === date.toISOString().slice(0, 10)
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
  };
};
