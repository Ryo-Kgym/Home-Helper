import { FC, useState } from "react";
import { UpdateCreditCardDetailPresenter } from "./UpdateCreditCardDetailPresenter";
import { IocomeType } from "@domain/model/household/IocomeType";
import { useUpdateCreditCardDetailBySerialNoMutation } from "@graphql/postgraphile/generated/graphql";
import { CreditCardDetail } from "@domain/model/household/CreditCardDetail";

type UpdateCreditCardDetailContainerProps = {
  initData: CreditCardDetail | null;
  onClose: () => void;
};
export const UpdateCreditCardDetailContainer: FC<
  UpdateCreditCardDetailContainerProps
> = ({ initData, onClose }) => {
  if (initData == null) return <div>No Data</div>;

  const date = initData.date;
  const [iocomeType, setIocomeType] = useState<IocomeType>(
    initData.iocomeType!
  );
  const [genreId, setGenreId] = useState<string | null>(initData.genreId);
  const [categoryId, setCategoryId] = useState<string | null>(
    initData.categoryId
  );
  const amount = initData.amount;
  const [memo, setMemo] = useState(initData.memo);

  const [ignore, update] = useUpdateCreditCardDetailBySerialNoMutation();
  const updateHandler = () => {
    update({
      serialNo: initData.serialNo!,
      categoryId: categoryId!,
      memo: memo,
    });
  };

  const resetClickHandler = () => {
    setIocomeType(initData.iocomeType!);
    setGenreId(initData.genreId);
    setCategoryId(initData.categoryId);
    setMemo(initData.memo);
  };

  return (
    <UpdateCreditCardDetailPresenter
      date={date}
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
      amount={amount}
      memo={memo ?? ""}
      changeMemoHandler={setMemo}
      resetClickHandler={resetClickHandler}
      updateClickHandler={() => {
        updateHandler();
        onClose();
      }}
    />
  );
};
