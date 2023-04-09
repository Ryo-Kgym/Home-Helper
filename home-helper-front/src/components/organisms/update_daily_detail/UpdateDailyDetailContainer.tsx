import { FC, useEffect, useState } from "react";
import { UpdateDailyDetailPresenter } from "./UpdateDailyDetailPresenter";
import { IocomeType } from "@domain/model/household/IocomeType";
import { useUpdateDailyDetailBySerialNo } from "@hooks/household/daily_detail/useUpdateDailyDetailBySerialNo";
import { useDeleteDailyDetailBySerialNo } from "@hooks/household/daily_detail/useDeleteDailyDetailBySerialNo";
import { DailyDetail } from "@domain/model/household/DailyDetail";

type UpdateDailyDetailContainerProps = {
  initData: DailyDetail | null;
  onClose: () => void;
};
export const UpdateDailyDetailContainer: FC<
  UpdateDailyDetailContainerProps
> = ({ initData, onClose }) => {
  const [date, setDate] = useState<Date | null>(null);
  const [iocomeType, setIocomeType] = useState<IocomeType>(IocomeType.Income);
  const [genreId, setGenreId] = useState<string | null>(null);
  const [categoryId, setCategoryId] = useState<string | null>(null);
  const [accountId, setAccountId] = useState<string | null>(null);
  const [amount, setAmount] = useState<number | "">("");
  const [memo, setMemo] = useState<string>("");

  const { updateHandler } = useUpdateDailyDetailBySerialNo({
    serialNo: initData?.serialNo!,
    date: date!,
    categoryId: categoryId!,
    accountId: accountId!,
    amount: Number(amount),
    memo: memo,
  });
  const { deleteHandler } = useDeleteDailyDetailBySerialNo({
    serialNo: initData?.serialNo!,
  });

  const resetClickHandler = () => {
    setDate(initData?.date!);
    setIocomeType(initData?.iocomeType!);
    setGenreId(initData?.genreId!);
    setCategoryId(initData?.categoryId!);
    setAccountId(initData?.accountId!);
    setAmount(initData?.amount!);
    setMemo(initData?.memo!);
  };

  useEffect(resetClickHandler, [initData]);

  return (
    <UpdateDailyDetailPresenter
      date={date}
      setDate={setDate}
      iocomeType={iocomeType}
      changeIocomeTypeHandler={(value: IocomeType) => {
        setIocomeType(value);
        setGenreId(initData?.genreId ?? null);
        setCategoryId(initData?.categoryId ?? null);
      }}
      genreId={genreId}
      changeGenreIdHandler={(value: string | null) => {
        setGenreId(value);
        setCategoryId(initData?.categoryId ?? null);
      }}
      categoryId={categoryId}
      changeCategoryIdHandler={setCategoryId}
      accountId={accountId}
      changeAccountIdHandler={setAccountId}
      amount={amount}
      changeAmountHandler={setAmount}
      memo={memo ?? ""}
      changeMemoHandler={setMemo}
      resetClickHandler={resetClickHandler}
      updateClickHandler={() => {
        updateHandler();
        onClose();
      }}
      deleteClickHandler={() => {
        // TODO リングしたい
        deleteHandler();
        onClose();
      }}
    />
  );
};
