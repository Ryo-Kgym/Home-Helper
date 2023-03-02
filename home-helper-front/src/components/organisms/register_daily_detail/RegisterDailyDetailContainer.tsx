import { FC, useState } from "react";
import { RegisterDailyDetailPresenter } from "./RegisterDailyDetailPresenter";
import { IocomeType } from "@domain/model/household/IocomeType";

type RegisterDailyDetailContainerProps = {
  date: Date;
};
export const RegisterDailyDetailContainer: FC<
  RegisterDailyDetailContainerProps
> = ({ date }) => {
  const [registerDate, setRegisterDate] = useState<Date>(date);
  const [iocomeType, setIocomeType] = useState<IocomeType>(IocomeType.Income);
  const [categoryId, setCategoryId] = useState<string | null>("");
  const [genreId, setGenreId] = useState<string | null>("");
  const [accountId, setAccountId] = useState<string | null>("");
  const [amount, setAmount] = useState<Number>(0);
  const [memo, setMemo] = useState("");

  const allClear = () => {
    setIocomeType(IocomeType.Income);
    setCategoryId(null);
    setGenreId(null);
    setAccountId(null);
    setAmount(0);
    setMemo("");
  };

  const register = () => {};

  return (
    <RegisterDailyDetailPresenter
      date={registerDate}
      setDate={setRegisterDate}
      iocomeType={iocomeType}
      setIocomeType={(value: IocomeType) => {
        setIocomeType(value);
        setGenreId(null);
        setCategoryId(null);
      }}
      genreId={genreId}
      setGenreId={(value: string | null) => {
        setGenreId(value);
        setCategoryId(null);
      }}
      categoryId={categoryId}
      setCategoryId={setCategoryId}
      accountId={accountId}
      setAccountId={setAccountId}
      amount={amount}
      setAmount={setAmount}
      memo={memo}
      setMemo={setMemo}
      clearClickHandler={allClear}
      registerClickHandler={register}
    />
  );
};
