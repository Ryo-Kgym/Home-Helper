import { FC, useState } from "react";
import { RegisterDailyDetailPresenter } from "./RegisterDailyDetailPresenter";
import { IocomeType } from "@domain/model/household/IocomeType";
import { useRegisterDailyDetail } from "@hooks/household/daily_detail/useRegisterDailyDetail";

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

  const checkInput = () => {
    if (genreId?.length === undefined || genreId?.length === 0) {
      alert("ジャンルを選択してください");
      return false;
    }
    if (categoryId?.length === undefined || categoryId?.length === 0) {
      alert("カテゴリーを選択してください");
      return false;
    }
    if (accountId?.length === undefined || accountId?.length === 0) {
      alert("アカウントを選択してください");
      return false;
    }
    if (amount === undefined) {
      alert("金額を入力してください");
      return false;
    }
    return true;
  };

  const register = useRegisterDailyDetail({
    date: registerDate,
    categoryId: categoryId!!,
    accountId: accountId!!,
    amount: amount as number,
    memo: memo,
  });
  const registerClickHandler = () => {
    if (!checkInput()) {
      return;
    }
    register();
    setAmount(0);
    setMemo("");
  };

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
      registerClickHandler={registerClickHandler}
    />
  );
};
