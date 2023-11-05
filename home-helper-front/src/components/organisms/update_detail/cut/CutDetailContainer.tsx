/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { DailyDetail } from "@domain/model/household/DailyDetail";
import { CutDetailPresenter } from "@components/organisms/update_detail/cut/CutDetailPresenter";
import { useState } from "react";

export const CutDetailContainer = ({
  initData,
  onClose,
}: {
  initData: DailyDetail;
  onClose: () => void;
}) => {
  const [detailDate, setDetailDate] = useState<Date>(initData?.date!);
  const [genreId, setGenreId] = useState<string | null>(initData?.genreId);
  const [categoryId, setCategoryId] = useState<string | null>(
    initData?.categoryId,
  );
  const [amount, setAmount] = useState<number | "">(0);
  const [newMemo, setNewMemo] = useState<string>("");
  const [cutAfterMemo, setCutAfterMemo] = useState<string>(
    initData?.memo ?? "",
  );
  const cutAfterAmount = Number(initData?.amount!) - Number(amount);

  const updateButtonDisabled =
    amount === 0 || amount === "" || cutAfterAmount < 0;

  return (
    <CutDetailPresenter
      detailDate={detailDate}
      defaultDetailDate={initData?.date!}
      setDetailDate={setDetailDate}
      iocomeType={initData?.iocomeType!}
      genreId={genreId}
      defaultGenreId={initData?.genreId}
      changeGenreIdHandler={setGenreId}
      categoryId={categoryId}
      defaultCategoryId={initData?.categoryId}
      changeCategoryIdHandler={setCategoryId}
      defaultAccountId={initData?.accountId}
      amount={amount}
      cutAfterAmount={cutAfterAmount}
      defaultAmount={initData?.amount}
      changeAmountHandler={setAmount}
      defaultMemo={initData?.memo ?? ""}
      newMemo={newMemo}
      changeNewMemoHandler={setNewMemo}
      cutAfterMemo={cutAfterMemo}
      changeCutAfterMemoHandler={setCutAfterMemo}
      updateHandler={() => {}}
      clearHandler={() => {}}
      updateButtonDisabled={updateButtonDisabled}
    />
  );
};
