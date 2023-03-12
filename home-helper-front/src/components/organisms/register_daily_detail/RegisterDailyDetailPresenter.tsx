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
  changeIocomeTypeHandler: (value: IocomeType) => void;
  categoryId: string | null;
  changeCategoryIdHandler: (value: string | null) => void;
  genreId: string | null;
  changeGenreIdHandler: (value: string | null) => void;
  accountId: string | null;
  changeAccountIdHandler: (value: string | null) => void;
  amount: number | "";
  changeAmountHandler: (value: number | "") => void;
  memo: string;
  changeMemoHandler: (value: string) => void;
  clearClickHandler: () => void;
  registerClickHandler: () => void;
};
export const RegisterDailyDetailPresenter: FC<
  RegisterDailyDetailPresenterProps
> = ({
  date,
  setDate,
  iocomeType,
  changeIocomeTypeHandler,
  categoryId,
  changeCategoryIdHandler,
  genreId,
  changeGenreIdHandler,
  accountId,
  changeAccountIdHandler,
  amount,
  changeAmountHandler,
  memo,
  changeMemoHandler,
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
        setIocomeType={changeIocomeTypeHandler}
      />
    </Field>
    <Field>
      <GenreSelect
        iocomeType={iocomeType}
        genreId={genreId}
        setGenreId={changeGenreIdHandler}
      />
    </Field>
    <Field>
      <CategorySelect
        genreId={genreId}
        categoryId={categoryId}
        setCategoryId={changeCategoryIdHandler}
      />
    </Field>
    <Field>
      <AccountSelect
        accountId={accountId}
        setAccountId={changeAccountIdHandler}
      />
    </Field>
    <Field>
      <AmountInput value={amount} onChange={changeAmountHandler} />
    </Field>
    <Field>
      <MemoTextArea memo={memo} setMemo={changeMemoHandler} />
    </Field>
    <Button colorType={"register"} onClick={registerClickHandler} />
    <Button colorType={"clear"} onClick={clearClickHandler} />
  </div>
);

const Field = ({ children }: { children: ReactNode }) => (
  <>
    <div className={"py-2"}>{children}</div>
  </>
);
