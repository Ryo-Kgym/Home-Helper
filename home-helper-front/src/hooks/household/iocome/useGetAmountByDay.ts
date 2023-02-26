export const useGetAmountByDay = (date: Date) => {
  const income: number | undefined = mockIncomeMap.get(
    date.toISOString().slice(0, 10)
  );
  const outcome: number | undefined = mockOutcomeMap.get(
    date.toISOString().slice(0, 10)
  );

  return {
    income: income,
    outcome: outcome,
  };
};

const mockIncomeMap = new Map<string, number>([
  ["2023-02-01", 1000],
  ["2023-02-03", 1200],
  ["2023-02-06", 1300],
  ["2023-02-09", 1600],
  ["2023-02-10", 1700],
  ["2023-02-11", 1800],
  ["2023-02-12", 1900],
  ["2023-02-13", 2000],
  ["2023-02-14", 2100],
  ["2023-02-20", 2100],
  ["2023-02-21", 2100],
]);

const mockOutcomeMap = new Map<string, number>([
  ["2023-02-01", 400],
  ["2023-02-03", 500],
  ["2023-02-04", 600],
  ["2023-02-09", 700],
  ["2023-02-10", 800],
  ["2023-02-14", 1000],
  ["2023-02-15", 900],
  ["2023-02-18", 1100],
  ["2023-02-19", 1200],
  ["2023-02-20", 1300],
  ["2023-02-21", 1400],
]);
