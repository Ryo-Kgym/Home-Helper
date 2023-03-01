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
  const [categoryId, setCategoryId] = useState<string | null>("");
  const [genreId, setGenreId] = useState<string | null>("");
  const [accountId, setAccountId] = useState<string | null>("");
  const [amount, setAmount] = useState<Number>(0);
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
