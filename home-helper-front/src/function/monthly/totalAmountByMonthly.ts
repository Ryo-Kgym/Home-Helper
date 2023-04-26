export interface TotalAmountByMonthlyArgs<T> {
  key: T;
  month: string;
  amount: number;
}

export type TotalAmountByMonthly<T> = {
  key: T;
  monthlyAmounts: number[];
};

export const totalAmountByMonthly = <T extends string>({
  key,
  month,
  amount,
}: TotalAmountByMonthlyArgs<T>): TotalAmountByMonthly<T> => {
  const monthlyAmounts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  const monthlyFunctionMap = new Map([
    ["01", (amount: number) => (monthlyAmounts[0] += amount)],
    ["02", (amount: number) => (monthlyAmounts[1] += amount)],
    ["03", (amount: number) => (monthlyAmounts[2] += amount)],
    ["04", (amount: number) => (monthlyAmounts[3] += amount)],
    ["05", (amount: number) => (monthlyAmounts[4] += amount)],
    ["06", (amount: number) => (monthlyAmounts[5] += amount)],
    ["07", (amount: number) => (monthlyAmounts[6] += amount)],
    ["08", (amount: number) => (monthlyAmounts[7] += amount)],
    ["09", (amount: number) => (monthlyAmounts[8] += amount)],
    ["10", (amount: number) => (monthlyAmounts[9] += amount)],
    ["11", (amount: number) => (monthlyAmounts[10] += amount)],
    ["12", (amount: number) => (monthlyAmounts[11] += amount)],
  ]);

  monthlyFunctionMap.get(month)!(amount);

  return { key, monthlyAmounts };
};
