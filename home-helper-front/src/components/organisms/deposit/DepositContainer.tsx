/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { DepositPresenter } from "./DepositPresenter";
import { useGetMonthlyDeposit } from "@hooks/household/deposit/useGetMonthlyDeposit";

export const DepositContainer = () => {
  const thisYear = new Date().getFullYear();
  const { monthlyDeposits, loading, error } = useGetMonthlyDeposit({
    fromDate: new Date(thisYear, 0, 1),
    toDate: new Date(thisYear, 11, 31),
  });

  if (loading) return <div>loading...</div>;

  return <DepositPresenter monthlyCategories={monthlyDeposits} />;
};
