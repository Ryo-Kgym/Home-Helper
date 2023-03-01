import { FC, ReactNode } from "react";
import { GenreSelect } from "@components/molecules/CustomSelect/Genre";
import { CategorySelect } from "@components/molecules/CustomSelect/Category";
import { AccountSelect } from "@components/molecules/CustomSelect/Account";
import { IocomeTypeSegment } from "@components/molecules/CustomSegment/IocomeType";
import { IocomeType } from "@domain/model/household/IocomeType";
import { AmountInputPresenter } from "@components/molecules/CustomNumberInput/Amount/AmountInputPresenter";
import { AmountInput } from "@components/molecules/CustomNumberInput/Amount";

type RegisterDailyDetailPresenterProps = {
  displayDate: string;
  iocomeType: IocomeType;
  setIocomeType: (value: IocomeType) => void;
  categoryId: string;
  setCategoryId: (value: string) => void;
  genreId: string;
  setGenreId: (value: string) => void;
  accountId: string;
  setAccountId: (value: string) => void;
  amount: Number;
  setAmount: (value: Number) => void;
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
  <div className={"grid grid-cols-1 w-full text-3xl"}>
    <div className={"text-center"}>{displayDate}</div>
    <Field>
      <IocomeTypeSegment
        iocomeType={iocomeType}
        setIocomeType={setIocomeType}
      />
    </Field>
    <Field>
      <GenreSelect iocomeType={iocomeType} />
    </Field>
    <Field>
      <CategorySelect genreId={"GNR00001"} />
    </Field>
    <Field>
      <AccountSelect />
    </Field>
    <Field>
      <AmountInput value={amount} onChange={setAmount} />
    </Field>
    <Field>
      <input type={"text"} />
    </Field>
  </div>
);

const Field = ({ children }: { children: ReactNode }) => (
  <>
    <div>{children}</div>
  </>
);
