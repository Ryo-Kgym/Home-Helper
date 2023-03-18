import { FC, ReactNode } from "react";
import { IocomeTypeSegment } from "@components/molecules/CustomSegment/IocomeType";
import { GenreSelect } from "@components/molecules/CustomSelect/Genre";
import { CategorySelect } from "@components/molecules/CustomSelect/Category";
import { AmountInput } from "@components/molecules/CustomNumberInput/Amount";
import { MemoTextArea } from "@components/molecules/CustomTextArea/Memo";
import { Button } from "@components/atoms/Button";
import { IocomeType } from "@domain/model/household/IocomeType";
import { DatePicker } from "@components/atoms/DatePicker";

type SetPropertiesPresenterProps = {
  date: Date;
  changeDateHandler: (value: Date) => void;
  iocomeType: IocomeType;
  changeIocomeTypeHandler: (value: IocomeType) => void;
  categoryId: string | null;
  changeCategoryIdHandler: (value: string | null) => void;
  genreId: string | null;
  changeGenreIdHandler: (value: string | null) => void;
  amount: number | "";
  changeAmountHandler: (value: number | "") => void;
  memo: string;
  changeMemoHandler: (value: string) => void;
  clearClickHandler: () => void;
  settingClickHandler: () => void;
  deleteClickHandler: () => void;
  settingDisabled: boolean;
};
export const SetPropertiesPresenter: FC<SetPropertiesPresenterProps> = ({
  date,
  changeDateHandler,
  iocomeType,
  changeIocomeTypeHandler,
  categoryId,
  changeCategoryIdHandler,
  genreId,
  changeGenreIdHandler,
  amount,
  changeAmountHandler,
  memo,
  changeMemoHandler,
  clearClickHandler,
  settingClickHandler,
  deleteClickHandler,
  settingDisabled,
}) => (
  <div className={"grid grid-cols-1 w-full"}>
    <Field>
      <DatePicker value={date} onChange={changeDateHandler} disabled={true} />
    </Field>
    <Field>
      <IocomeTypeSegment
        iocomeType={iocomeType}
        setIocomeType={changeIocomeTypeHandler}
        disabled={true}
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
      <AmountInput
        value={amount}
        onChange={changeAmountHandler}
        disabled={true}
      />
    </Field>
    <Field>
      <MemoTextArea memo={memo} setMemo={changeMemoHandler} />
    </Field>
    <Button
      colorType={"register"}
      label={"SET"}
      onClick={settingClickHandler}
      disabled={settingDisabled}
    />
    <Button colorType={"delete"} onClick={deleteClickHandler} />
    <Button colorType={"clear"} onClick={clearClickHandler} />
  </div>
);

const Field = ({ children }: { children: ReactNode }) => (
  <>
    <div className={"py-2"}>{children}</div>
  </>
);
