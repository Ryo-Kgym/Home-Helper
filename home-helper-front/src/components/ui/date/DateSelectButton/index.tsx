/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { Button } from "components/ui";
import { useDateHolder } from "@hooks/date/useDateHolder";
import { useDate } from "@hooks/date/useDate";

type DateSelectButtonProps = { type?: ButtonType };

export const DateSelectButton = ({ type = "today" }: DateSelectButtonProps) => {
  const { getNow, getThisFirstDate, getThisLastDate } = useDate();
  const { saveTerm } = useDateHolder();
  const { label } = TypeMap.get(type)!;

  const { getFromDate, getToDate } = new Map<
    ButtonType,
    { getFromDate: () => Date; getToDate: () => Date }
  >([
    ["today", { getFromDate: getNow, getToDate: getNow }],
    ["month", { getFromDate: getThisFirstDate, getToDate: getThisLastDate }],
  ]).get(type)!;

  return (
    <Button
      label={label}
      onClick={() => saveTerm(getFromDate(), getToDate())}
    />
  );
};

type ButtonType = "today" | "month";

type MappedType = {
  label: string;
};

const TypeMap = new Map<ButtonType, MappedType>([
  ["today", { label: "今日" }],
  ["month", { label: "今月" }],
]);
