/*
 * Copyright (c) 2023 Ryo-Kgym.
 */
"use client";

import { MonthPicker } from "@components/ui/date";
import { useState } from "react";
import { IncomeDetail } from "@gateway/side_job/income/incomeDetail";
import { CheckableSelect } from "@components/ui";

const Client = ({ data }: { data: IncomeDetail[] }) => {
  const [date, setDate] = useState<Date | null>(new Date());
  const [checked, setChecked] = useState<IncomeDetail[]>([]);

  return (
    <div className={"grid grid-cols-2"}>
      <div>
        <MonthPicker value={date} setValue={setDate} />
        <CheckableSelect
          values={checked}
          setValues={setChecked}
          data={data}
          converter={(income) => <Row income={income} />}
        />
      </div>
      <div></div>
    </div>
  );
};

export default Client;

const Row = ({ income }: { income: IncomeDetail }) => (
  <div className={"flex space-x-5"}>
    <div className={"flex text-xl items-center"}>
      <div>{income.date.toISOString().slice(0, 10)}</div>
    </div>
    <div className={"flex-1"}>
      <div className={"flex text-xl"}>
        <div>{income.categoryName}</div>
        <div>・</div>
        <div>{income.amount.toLocaleString()}</div>
      </div>
      <div className={"flex"}>
        <div>{income.genreName}</div>
        <div>・</div>
        <div>{income.memo}</div>
      </div>
    </div>
  </div>
);
