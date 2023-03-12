import { FC } from "react";

type TotalProps = { income?: number; outcome?: number };
export const TotalPresenter: FC<TotalProps> = ({ income = 0, outcome = 0 }) => (
  <div className="flex justify-center text-3xl">
    <div className="p-4 text-green-600">収入：{income.toLocaleString()}</div>
    <div className="p-4 text-red-400">支出：{outcome.toLocaleString()}</div>
    <div className="p-4">合計：{(income - outcome).toLocaleString()}</div>
  </div>
);
