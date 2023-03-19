import { FC, useState } from "react";
import { UpdateDailyDetailPresenter } from "./UpdateDailyDetailPresenter";
import { IocomeType } from "@domain/model/household/IocomeType";

type UpdateDailyDetailContainerProps = {
  serialNo: number;
};
export const UpdateDailyDetailContainer: FC<
  UpdateDailyDetailContainerProps
> = ({ serialNo }) => {
  const [registerDate, setRegisterDate] = useState<Date | null>(null);
  const [iocomeType, setIocomeType] = useState<IocomeType>(IocomeType.Income);
  const [categoryId, setCategoryId] = useState<string | null>("");
  const [genreId, setGenreId] = useState<string | null>("");
  const [accountId, setAccountId] = useState<string | null>("");
  const [amount, setAmount] = useState<number | "">("");
  const [memo, setMemo] = useState("");

  return (
    <UpdateDailyDetailPresenter
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
      clearClickHandler={() => {}}
      registerClickHandler={() => {}}
    />
  );
};
