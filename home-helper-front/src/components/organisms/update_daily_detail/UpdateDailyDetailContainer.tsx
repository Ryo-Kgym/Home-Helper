import { FC, useState } from "react";
import { UpdateDailyDetailPresenter } from "./UpdateDailyDetailPresenter";
import { IocomeType } from "@domain/model/household/IocomeType";
import { DailyDetail } from "@hooks/household/daily_detail/useGetDailyDetailByDate";
import { useUpdateDailyDetailBySerialNo } from "@hooks/household/daily_detail/useUpdateDailyDetailBySerialNo";
import { useDeleteDailyDetailBySerialNo } from "@hooks/household/daily_detail/useDeleteDailyDetailBySerialNo";

type UpdateDailyDetailContainerProps = {
  initData: DailyDetail | null;
  onClose: () => void;
};
export const UpdateDailyDetailContainer: FC<
  UpdateDailyDetailContainerProps
> = ({ initData, onClose }) => {
  if (initData == null) return <div>No Data</div>;

  const [date, setDate] = useState<Date | null>(initData.date);
  const [iocomeType, setIocomeType] = useState<IocomeType>(
    initData.iocomeType!
  );
  const [genreId, setGenreId] = useState<string | null>(initData.genreId);
  const [categoryId, setCategoryId] = useState<string | null>(
    initData.categoryId
  );
  const [accountId, setAccountId] = useState<string | null>(initData.accountId);
  const [amount, setAmount] = useState<number | "">(initData.amount);
  const [memo, setMemo] = useState(initData.memo);

  const { updateHandler } = useUpdateDailyDetailBySerialNo({
    serialNo: initData.serialNo!,
    date: date!,
    categoryId: categoryId!,
    accountId: accountId!,
    amount: Number(amount),
    memo: memo,
  });
  const { deleteHandler } = useDeleteDailyDetailBySerialNo({
    serialNo: initData.serialNo!,
  });

  const resetClickHandler = () => {
    setDate(initData.date);
    setIocomeType(initData.iocomeType!);
    setGenreId(initData.genreId);
    setCategoryId(initData.categoryId);
    setAccountId(initData.accountId);
    setAmount(initData.amount);
    setMemo(initData.memo);
  };

  return (
    <UpdateDailyDetailPresenter
      date={date}
      setDate={setDate}
      iocomeType={iocomeType}
      changeIocomeTypeHandler={(value: IocomeType) => {
        setIocomeType(value);
        setGenreId(initData.genreId);
        setCategoryId(initData.categoryId);
      }}
      genreId={genreId}
      changeGenreIdHandler={(value: string | null) => {
        setGenreId(value);
        setCategoryId(initData.categoryId);
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
