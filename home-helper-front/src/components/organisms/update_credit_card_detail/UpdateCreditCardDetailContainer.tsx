import { FC, useEffect, useMemo, useState } from "react";
import { UpdateCreditCardDetailPresenter } from "./UpdateCreditCardDetailPresenter";
import { IocomeType } from "@domain/model/household/IocomeType";
import {
  useGetCreditCardDetailByIdQuery,
  useUpdateCreditCardDetailByIdMutation,
} from "@graphql/postgraphile/generated/graphql";
import { successPopup } from "@function/successPopup";

type UpdateCreditCardDetailContainerProps = {
  id: string | null;
  onClose: () => void;
};
export const UpdateCreditCardDetailContainer: FC<
  UpdateCreditCardDetailContainerProps
> = ({ id, onClose }) => {
  const [iocomeType, setIocomeType] = useState<IocomeType>(IocomeType.Income);
  const [genreId, setGenreId] = useState<string | null>(null);
  const [categoryId, setCategoryId] = useState<string | null>(null);
  const [memo, setMemo] = useState<string | null>(null);

  const [{ data }] = useGetCreditCardDetailByIdQuery({
    variables: {
      id: id == null ? Number.MIN_VALUE : id,
    },
  });

  const [ignore, update] = useUpdateCreditCardDetailByIdMutation();

  const updateHandler = () => {
    update({
      id: id!,
      categoryId: categoryId!,
      memo: memo,
    });
    successPopup("更新しました。");
    onClose();
  };

  const initData = useMemo(
    () => ({
      date: new Date(data?.creditCardDetailById?.date),
      iocomeType:
        data?.creditCardDetailById?.categoryByCategoryId?.genreByGenreId
          ?.iocomeType ?? IocomeType.Income,
      genreId:
        data?.creditCardDetailById?.categoryByCategoryId?.genreByGenreId
          ?.genreId ?? null,
      categoryId:
        data?.creditCardDetailById?.categoryByCategoryId?.categoryId ?? null,
      amount: Number(data?.creditCardDetailById?.amount) ?? "",
      memo: data?.creditCardDetailById?.memo,
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
