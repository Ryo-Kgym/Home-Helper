import { FC, useEffect, useState } from "react";
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
  if (serialNo == null) return <div>No Data</div>;

  const [{ data, fetching }, refetch] = useGetCreditCardDetailBySerialNoQuery({
    variables: {
      serialNo,
    },
  });

  const initData = {
    date: fetching ? null : new Date(data?.creditCardDetailBySerialNo?.date),
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
  };

  const [iocomeType, setIocomeType] = useState<IocomeType>(initData.iocomeType);
  const [genreId, setGenreId] = useState(initData.genreId);
  const [categoryId, setCategoryId] = useState(initData.categoryId);
  const [memo, setMemo] = useState(initData.memo);

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

  const resetClickHandler = () => {
    setIocomeType(initData.iocomeType!);
    setGenreId(initData.genreId);
    setCategoryId(initData.categoryId);
    setMemo(initData.memo);
  };

  useEffect(() => {
    refetch({ requestPolicy: "network-only" });
  }, []);

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
