import { FC } from "react";

type TotalProps = { total: number | undefined };
export const TotalPresenter: FC<TotalProps> = ({ total = 0 }) => (
  <div className="flex justify-center text-3xl max-sm:text-sm">
    <div className="p-4">合計：{total.toLocaleString()}</div>
  </div>
);
