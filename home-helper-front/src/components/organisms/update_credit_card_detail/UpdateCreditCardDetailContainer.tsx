import { FC, useEffect, useMemo, useState } from "react";
import { UpdateCreditCardDetailPresenter } from "./UpdateCreditCardDetailPresenter";
import { IocomeType } from "@domain/model/household/IocomeType";
import {
  useGetCreditCardDetailBySerialNoQuery,
  useUpdateCreditCardDetailBySerialNoMutation,
} from "@graphql/postgraphile/generated/graphql";
import { successPopup } from "@function/successPopup";

type UpdateCreditCardDetailContainerProps = {
  serialNo: number | null;
  onClose: () => void;
};
export const UpdateCreditCardDetailContainer: FC<
  UpdateCreditCardDetailContainerProps
> = ({ serialNo, onClose }) => {
  const [iocomeType, setIocomeType] = useState<IocomeType>(IocomeType.Income);
  const [genreId, setGenreId] = useState<string | null>(null);
  const [categoryId, setCategoryId] = useState<string | null>(null);
  const [memo, setMemo] = useState<string | null>(null);

  const [{ data }] = useGetCreditCardDetailBySerialNoQuery({
    variables: {
      serialNo: serialNo == null ? Number.MIN_VALUE : serialNo,
    },
  });

  const [ignore, update] = useUpdateCreditCardDetailBySerialNoMutation();

  const updateHandler = () => {
    update({
      serialNo: serialNo!,
      categoryId: categoryId!,
      memo: memo,
    });
    successPopup("更新しました。");
    onClose();
  };

  const initData = useMemo(
    () => ({
      date: new Date(data?.creditCardDetailBySerialNo?.date),
      iocomeType:
        data?.creditCardDetailBySerialNo?.categoryByCategoryId?.genreByGenreId
          ?.iocomeType ?? IocomeType.Income,
      genreId:
        data?.creditCardDetailBySerialNo?.categoryByCategoryId?.genreByGenreId
          ?.genreId ?? null,
      categoryId:
        data?.creditCardDetailBySerialNo?.categoryByCategoryId?.categoryId ??
        null,
      amount: Number(data?.creditCardDetailBySerialNo?.amount) ?? "",
      memo: data?.creditCardDetailBySerialNo?.memo,
    }),
    [data]
  );

  const resetClickHandler = () => {
    setIocomeType(initData.iocomeType!);
    setGenreId(initData.genreId);
    setCategoryId(initData.categoryId);
    setMemo(initData.memo ?? null);
  };

  useEffect(resetClickHandler, [initData]);

  if (data == null) return <div>No Data</div>;

  return (
    <UpdateCreditCardDetailPresenter
      date={initData.date}
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
      amount={initData.amount}
      memo={memo ?? ""}
      changeMemoHandler={setMemo}
      resetClickHandler={resetClickHandler}
      updateClickHandler={updateHandler}
    />
  );
};
