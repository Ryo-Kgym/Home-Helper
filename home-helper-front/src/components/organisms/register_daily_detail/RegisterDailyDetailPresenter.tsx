import { FC, ReactNode } from "react";
import { GenreSelect } from "@components/molecules/CustomSelect/Genre";
import { CategorySelect } from "@components/molecules/CustomSelect/Category";
import { AccountSelect } from "@components/molecules/CustomSelect/Account";

type RegisterDailyDetailPresenterProps = {
  displayDate: string;
  iocomeType: "INCOME" | "OUTCOME";
  setIocomeType: (value: "INCOME" | "OUTCOME") => void;
  categoryId: string;
  setCategoryId: (value: string) => void;
  genreId: string;
  setGenreId: (value: string) => void;
  accountId: string;
  setAccountId: (value: string) => void;
  amount: string;
  setAmount: (value: string) => void;
  memo: string;
  setMemo: (value: string) => void;
};
export const RegisterDailyDetailPresenter: FC<
  RegisterDailyDetailPresenterProps
> = ({
  displayDate,
  iocomeType,
  setIocomeType,
  categoryId,
  setCategoryId,
  genreId,
  setGenreId,
  accountId,
  setAccountId,
  amount,
  setAmount,
  memo,
  setMemo,
}) => (
  <div className={"grid grid-cols-2 w-full text-3xl"}>
    <div className={"col-span-2 text-center"}>{displayDate}</div>
    <Field label={"区分"}>
      <GenreSelect iocomeType={"INCOME"} />
    </Field>
    <Field label={"ジャンル"}>
      <GenreSelect iocomeType={"OUTCOME"} />
    </Field>
    <Field label={"カテゴリ"}>
      <CategorySelect genreId={"GNR00001"} />
    </Field>
    <Field label={"アカウント"}>
      <AccountSelect />
    </Field>
    <Field label={"金額"}>
      <input type={"number"} />
    </Field>
    <Field label={"メモ"}>
      <input type={"text"} />
    </Field>
  </div>
);

const Field = ({ label, children }: { label: string; children: ReactNode }) => (
  <>
    <div>{label}</div>
    <div>{children}</div>
  </>
);
