import { SetPropertiesPresenter } from "@components/organisms/file_import/SetProperties/SetPropertiesPresenter";
import { FC, useState } from "react";
import { IocomeType } from "@domain/model/household/IocomeType";
import { LoadFileProps } from "@components/organisms/file_import/loadUploadFile";

type SetPropertiesContainerProps = {
  initialValues: LoadFileProps;
};
export const SetPropertiesContainer: FC<SetPropertiesContainerProps> = ({
  initialValues,
}) => {
  const { date: initDate, price: initPrice, note: initNote } = initialValues;

  const [date, setDate] = useState<Date | null>(initDate);
  const [iocomeType, setIocomeType] = useState<IocomeType>(IocomeType.Income);
  const [categoryId, setCategoryId] = useState<string | null>(null);
  const [genreId, setGenreId] = useState<string | null>(null);
  const [amount, setAmount] = useState<number | "">(initPrice);
  const [memo, setMemo] = useState<string>(initNote);

  const settingDisabled = !categoryId || !genreId || !amount;

  const clearClickHandler = () => {
    setIocomeType(IocomeType.Income);
    setCategoryId(null);
    setGenreId(null);
    setMemo(initNote);
  };

  const settingClickHandler = () => {
    console.log("registerClickHandler");
  };

  return (
    <SetPropertiesPresenter
      date={date!}
      changeDateHandler={setDate}
      iocomeType={iocomeType}
      changeIocomeTypeHandler={(value) => {
        setIocomeType(value);
        setGenreId(null);
        setCategoryId(null);
      }}
      genreId={genreId}
      changeGenreIdHandler={(value) => {
        setGenreId(value);
        setCategoryId(null);
      }}
      categoryId={categoryId}
      changeCategoryIdHandler={(value) => {
        setCategoryId(value);
      }}
      amount={amount}
      changeAmountHandler={setAmount}
      memo={memo}
      changeMemoHandler={setMemo}
      clearClickHandler={clearClickHandler}
      settingClickHandler={settingClickHandler}
      settingDisabled={settingDisabled}
    />
  );
};
