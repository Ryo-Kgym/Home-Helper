import { FC } from "react";

type TotalProps = {
  income: number;
  outcome: number;
  hidden: boolean;
};
export const IocomeTotalPresenter: FC<TotalProps> = ({
  income,
  outcome,
  hidden,
}) => (
  <div className="flex justify-center text-3xl">
    <div className="p-4 text-green-600" hidden={hidden}>
      収入：{income.toLocaleString()}
    </div>
    <div className="p-4 text-red-400" hidden={hidden}>
      支出：{outcome.toLocaleString()}
    </div>
    <div className="p-4">合計：{(income - outcome).toLocaleString()}</div>
  </div>
);
