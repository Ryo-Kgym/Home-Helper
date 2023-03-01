import { FC, useState } from "react";
import { RegisterDailyDetailPresenter } from "./RegisterDailyDetailPresenter";
import { IocomeType } from "@domain/model/household/IocomeType";

type RegisterDailyDetailContainerProps = {
  date: Date;
};
export const RegisterDailyDetailContainer: FC<
  RegisterDailyDetailContainerProps
> = ({ date }) => {
  const [iocomeType, setIocomeType] = useState<IocomeType>(IocomeType.Income);
  const [categoryId, setCategoryId] = useState("");
  const [genreId, setGenreId] = useState("");
  const [accountId, setAccountId] = useState("");
  const [amount, setAmount] = useState("");
  const [memo, setMemo] = useState("");

  const displayDate = date.toLocaleDateString();

  return (
    <RegisterDailyDetailPresenter
      displayDate={displayDate}
      iocomeType={iocomeType}
      setIocomeType={setIocomeType}
      categoryId={categoryId}
      setCategoryId={setCategoryId}
      genreId={genreId}
      setGenreId={setGenreId}
      accountId={accountId}
      setAccountId={setAccountId}
      amount={amount}
      setAmount={setAmount}
      memo={memo}
      setMemo={setMemo}
    />
  );
};
