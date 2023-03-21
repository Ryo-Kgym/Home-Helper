import { FC, useState } from "react";
import { UpdateDailyDetailPresenter } from "./UpdateDailyDetailPresenter";
import { IocomeType } from "@domain/model/household/IocomeType";
import { DailyDetail } from "@hooks/household/daily_detail/useGetDailyDetailByDate";

type UpdateDailyDetailContainerProps = {
  initData: DailyDetail | null;
};
export const UpdateDailyDetailContainer: FC<
  UpdateDailyDetailContainerProps
> = ({ initData }) => {
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

  const clearClickHandler = () => {
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
      clearClickHandler={clearClickHandler}
      registerClickHandler={() => {}}
    />
  );
};
