import { FC, useState } from "react";
import { RegisterDailyDetailPresenter } from "./RegisterDailyDetailPresenter";

type RegisterDailyDetailContainerProps = {
  date: Date;
};
export const RegisterDailyDetailContainer: FC<
  RegisterDailyDetailContainerProps
> = ({ date }) => {
  const [iocomeType, setIocomeType] = useState<"INCOME" | "OUTCOME">("INCOME");
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
