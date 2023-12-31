/*
 * Copyright (c) 2023 Ryo-Kgym.
 */
"use client";

import { useGetCreditCardDetailBySummaryIdQuery } from "@graphql/hasura/generated/hasuraGraphql";
import { useState } from "react";
import { Presenter_ } from "./Presenter";

export const Container_ = ({ summaryId }: { summaryId: string }) => {
  const [date, setDate] = useState<Date>(new Date());
  const [genreId, setGenreId] = useState<string | null>("");
  const [categoryId, setCategoryId] = useState<string | null>("");
  const [amount, setAmount] = useState<number | "">("");
  const [memo, setMemo] = useState<string>("");

  const [{ data }] = useGetCreditCardDetailBySummaryIdQuery({
    variables: {
      id: summaryId,
    },
  });

  const registerHandler = () => {};

  return (
    <Presenter_
      date={date}
      setDate={setDate}
      genreId={genreId}
      setGenreId={setGenreId}
      categoryId={categoryId}
      setCategoryId={setCategoryId}
      amount={amount}
      setAmount={setAmount}
      memo={memo}
      setMemo={setMemo}
      accountId={data?.creditCardSummary?.account.id ?? ""}
      registerHandler={registerHandler}
    />
  );
};
