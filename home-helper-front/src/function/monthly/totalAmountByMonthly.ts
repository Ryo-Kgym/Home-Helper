export interface TotalAmountByMonthlyArgs<T> {
  key: T;
  list: {
    month: string;
    amount: number;
  }[];
}

export type TotalAmountByMonthly<T> = {
  key: T;
  monthlyTotal: number[];
  total: number;
};

export const totalAmountByMonthly = <T>({
  key,
  list,
}: TotalAmountByMonthlyArgs<T>): TotalAmountByMonthly<T> => {
  const monthlyTotal = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let total = 0;

  const monthlyFunctionMap = new Map([
    ["01", (amount: number) => (monthlyTotal[0] += amount)],
    ["02", (amount: number) => (monthlyTotal[1] += amount)],
    ["03", (amount: number) => (monthlyTotal[2] += amount)],
    ["04", (amount: number) => (monthlyTotal[3] += amount)],
    ["05", (amount: number) => (monthlyTotal[4] += amount)],
    ["06", (amount: number) => (monthlyTotal[5] += amount)],
    ["07", (amount: number) => (monthlyTotal[6] += amount)],
    ["08", (amount: number) => (monthlyTotal[7] += amount)],
    ["09", (amount: number) => (monthlyTotal[8] += amount)],
    ["10", (amount: number) => (monthlyTotal[9] += amount)],
    ["11", (amount: number) => (monthlyTotal[10] += amount)],
    ["12", (amount: number) => (monthlyTotal[11] += amount)],
  ]);

  list.forEach(({ month, amount }) => {
    monthlyFunctionMap.get(month)!(amount);
    total += amount;
  });

  return { key, monthlyTotal, total };
};
