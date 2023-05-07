// totalAmountByMonthly
// jest parameterized test

import {
  totalAmountByMonthly,
  TotalAmountByMonthlyArgs,
} from "./totalAmountByMonthly";

describe("totalAmountByMonthly", () => {
  test.each([
    {
      key: "key",
      list: [
        { month: "01", amount: 100 },
        { month: "02", amount: 200 },
        { month: "03", amount: 300 },
        { month: "04", amount: 400 },
        { month: "05", amount: 500 },
        { month: "07", amount: 700 },
        { month: "08", amount: 800 },
        { month: "09", amount: 900 },
        { month: "10", amount: 1000 },
        { month: "11", amount: 1100 },
        { month: "02", amount: 200 },
        { month: "03", amount: 300 },
        { month: "04", amount: 400 },
        { month: "05", amount: 500 },
        { month: "06", amount: 600 },
        { month: "07", amount: 700 },
        { month: "08", amount: 800 },
        { month: "09", amount: 900 },
        { month: "10", amount: 1000 },
        { month: "11", amount: 1100 },
      ],
      fromDate: new Date("2023-01-01"),
      toDate: new Date("2023-12-31"),
    },
  ])(
    "totalAmountByMonthly",
    ({ key, list, fromDate, toDate }: TotalAmountByMonthlyArgs<string>) => {
      const actual = totalAmountByMonthly({ key, list, fromDate, toDate });
      expect(actual).toEqual({
        key,
        monthlyTotal: [
          100, 400, 600, 800, 1000, 600, 1400, 1600, 1800, 2000, 2200, 0,
        ],
        total: 12500,
      });
    }
  );
});
