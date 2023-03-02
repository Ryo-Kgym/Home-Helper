import { FC, ReactNode } from "react";
import { GenreSelect } from "@components/molecules/CustomSelect/Genre";
import { CategorySelect } from "@components/molecules/CustomSelect/Category";
import { AccountSelect } from "@components/molecules/CustomSelect/Account";
import { IocomeTypeSegment } from "@components/molecules/CustomSegment/IocomeType";
import { IocomeType } from "@domain/model/household/IocomeType";
import { AmountInput } from "@components/molecules/CustomNumberInput/Amount";
import { MemoTextArea } from "@components/molecules/CustomTextArea/Memo";
import { Button } from "@components/atoms/Button";
import { DatePicker } from "@components/atoms/DatePicker";

type RegisterDailyDetailPresenterProps = {
  date: Date;
  setDate: (value: Date) => void;
  iocomeType: IocomeType;
  setIocomeType: (value: IocomeType) => void;
  categoryId: string | null;
  setCategoryId: (value: string | null) => void;
  genreId: string | null;
  setGenreId: (value: string | null) => void;
  accountId: string | null;
  setAccountId: (value: string | null) => void;
  amount: Number;
  setAmount: (value: Number) => void;
  memo: string;
  setMemo: (value: string) => void;
  clearClickHandler: () => void;
  registerClickHandler: () => void;
};
export const RegisterDailyDetailPresenter: FC<
  RegisterDailyDetailPresenterProps
> = ({
  date,
  setDate,
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
  clearClickHandler,
  registerClickHandler,
}) => (
  <div className={"grid grid-cols-1 w-full"}>
    <Field>
      <DatePicker
        value={date}
        onChange={setDate}
        withAsterisk
        defaultValue={date}
      />
    </Field>
    <Field>
      <IocomeTypeSegment
        iocomeType={iocomeType}
        setIocomeType={setIocomeType}
      />
    </Field>
    <Field>
      <GenreSelect
        iocomeType={iocomeType}
        genreId={genreId}
        setGenreId={setGenreId}
      />
    </Field>
    <Field>
      <CategorySelect
        genreId={genreId}
        categoryId={categoryId}
        setCategoryId={setCategoryId}
      />
    </Field>
    <Field>
      <AccountSelect accountId={accountId} setAccountId={setAccountId} />
    </Field>
    <Field>
      <AmountInput value={amount} onChange={setAmount} />
    </Field>
    <Field>
      <MemoTextArea memo={memo} setMemo={setMemo} />
    </Field>
    <Button colorType={"clear"} onClick={clearClickHandler} />
    <Button colorType={"register"} onClick={registerClickHandler} />
  </div>
);

const Field = ({ children }: { children: ReactNode }) => (
  <>
    <div className={"py-4"}>{children}</div>
  </>
);
