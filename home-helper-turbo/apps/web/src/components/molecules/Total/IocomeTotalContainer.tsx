/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { IocomeTotalPresenter } from "@components/molecules/Total/IocomeTotalPresenter";
import { FC } from "react";

export const IocomeTotalContainer = ({
  income = 0,
  outcome = 0,
}: {
  income: number | undefined;
  outcome: number | undefined;
}) => {
  const hidden = income === 0 && outcome === 0;

  return (
    <IocomeTotalPresenter income={income} outcome={outcome} hidden={hidden} />
  );
};
