import { FC, useState } from "react";
import { RegisterDailyDetailPresenter } from "./RegisterDailyDetailPresenter";
import { IocomeType } from "@domain/model/household/IocomeType";
import { useRegisterDailyDetail } from "@hooks/household/daily_detail/useRegisterDailyDetail";
import { errorPopup, successPopup } from "@function/successPopup";

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
  const [amount, setAmount] = useState<Number | null>(null);
  const [memo, setMemo] = useState("");

  const allClear = () => {
    setIocomeType(IocomeType.Income);
    setCategoryId(null);
    setGenreId(null);
    setAccountId(null);
    setAmount(0);
    setMemo("");
  };

  const anyFieldIsInvalid = () => {
    const genreIdIsInvalid = genreId === null || genreId === "";
    const categoryIdIsInvalid = categoryId === null || categoryId === "";
    const accountIdIsInvalid = accountId === null || accountId === "";
    const amountIsInvalid = amount === undefined || amount === null;

    return (
      genreIdIsInvalid ||
      categoryIdIsInvalid ||
      accountIdIsInvalid ||
      amountIsInvalid
    );
  };

  const register = useRegisterDailyDetail({
    date: registerDate,
    categoryId: categoryId!!,
    accountId: accountId!!,
    amount: amount as number,
    memo: memo,
  });

  const registerClickHandler = () => {
    if (anyFieldIsInvalid()) {
      errorPopup("入力に不備があります");
      return;
    }
    register();
    setAmount(null);
    setMemo("");
    successPopup("登録しました");
  };

  return (
    <RegisterDailyDetailPresenter
      date={registerDate}
      setDate={setRegisterDate}
      iocomeType={iocomeType}
      changeIocomeTypeHandler={(value: IocomeType) => {
        setIocomeType(value);
        setGenreId(null);
        setCategoryId(null);
      }}
      genreId={genreId}
      changeGenreIdHandler={(value: string | null) => {
        setGenreId(value);
        setCategoryId(null);
      }}
      categoryId={categoryId}
      changeCategoryIdHandler={setCategoryId}
      accountId={accountId}
      changeAccountIdHandler={setAccountId}
      amount={amount}
      changeAmountHandler={setAmount}
      memo={memo}
      changeMemoHandler={setMemo}
      clearClickHandler={allClear}
      registerClickHandler={registerClickHandler}
    />
  );
};
