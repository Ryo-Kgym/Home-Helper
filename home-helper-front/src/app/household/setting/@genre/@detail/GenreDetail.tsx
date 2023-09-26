/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { ReactNode, useEffect, useState } from "react";
import { Button } from "@components/atoms/Button";
import {
  useGetGenreByIdQuery,
  useUpdateGenreByIdMutation,
} from "@graphql/hasura/generated/hasuraGraphql";
import { useGenreHolder } from "@hooks/genre/useGenreHolder";
import { DisplayOrderInput } from "@components/molecules/CustomNumberInput/DisplayOrder";
import { IocomeTypeSegment } from "@components/molecules/CustomSegment/IocomeType";
import { IocomeType } from "@domain/model/household/IocomeType";
import { GenreTypeSegment } from "@components/molecules/CustomSegment/GenreTypeSegment";
import { GenreType } from "@domain/model/household/GenreType";
import { ValiditySegment } from "@components/molecules/CustomSegment/ValiditySegment";
import { GenreNameTextInput } from "@components/molecules/CustomTextInput";
import { errorPopup, successPopup } from "@function/successPopup";

export const GenreDetail = () => {
  const [inputGenreName, setInputGenreName] = useState<string>("");
  const [inputGenreType, setInputGenreType] = useState<GenreType>(
    GenreType.FIXED,
  );
  const [inputIocomeType, setInputIocomeType] = useState<IocomeType>(
    IocomeType.Income,
  );
  const [inputIsValid, setInputIsValid] = useState<boolean>(true);
  const [inputDisplayOrder, setInputDisplayOrder] = useState<number | "">(0);

  const { genreId } = useGenreHolder();
  const [{ data }] = useGetGenreByIdQuery({
    variables: {
      genreId,
    },
  });
  const {
    genreName,
    genreType,
    iocomeType,
    displayOrder,
    validFlag,
    categories = [],
  } = data?.genreById ?? {};

  const [, mutation] = useUpdateGenreByIdMutation();

  const updateHandler = async () => {
    try {
      await mutation({
        genreId,
        genreName: inputGenreName,
        genreType: inputGenreType,
        iocomeType: inputIocomeType,
        validFlag: inputIsValid,
        displayOrder: Number(inputDisplayOrder),
      });
      successPopup("更新しました");
    } catch (e) {
      errorPopup("更新に失敗しました");
      console.error(e);
    }
  };

  useEffect(() => {
    setInputGenreName(genreName ?? "");
  }, [genreName]);

  useEffect(() => {
    setInputGenreType(genreType ?? GenreType.FIXED);
  }, [genreType]);

  useEffect(() => {
    setInputIocomeType(iocomeType ?? IocomeType.Income);
  }, [iocomeType]);

  useEffect(() => {
    setInputIsValid(validFlag ?? true);
  }, [validFlag]);

  useEffect(() => {
    setInputDisplayOrder(displayOrder ?? "");
  }, [displayOrder]);

  return (
    <div className={"w-full p-2"}>
      <Frame title={"ジャンル名"}>
        <GenreNameTextInput
          genreName={inputGenreName}
          setGenreName={setInputGenreName}
        />
      </Frame>
      <Frame title={"ジャンル区分"}>
        <GenreTypeSegment
          genreType={inputGenreType}
          setGenreType={setInputGenreType}
        />
      </Frame>
      <Frame title={"収支区分"}>
        <IocomeTypeSegment
          iocomeType={inputIocomeType}
          setIocomeType={setInputIocomeType}
        />
      </Frame>
      <Frame title={"有効・無効"}>
        <ValiditySegment isValid={inputIsValid} setIsValid={setInputIsValid} />
      </Frame>
      <Frame title={"表示順"}>
        <DisplayOrderInput
          value={inputDisplayOrder}
          onChange={setInputDisplayOrder}
        />
      </Frame>
      <Frame title={"登録済みのカテゴリ"}>
        <div className={"grid grid-cols-3 text-gray-500"}>
          {categories.map((category) => (
            <div key={category?.categoryId}>{category?.categoryName}</div>
          ))}
        </div>
      </Frame>

      <Button onClick={updateHandler} colorType={"update"} />
    </div>
  );
};

const Frame = ({ title, children }: { title: string; children: ReactNode }) => (
  <div className={"bg-gray-100 p-4 my-4 rounded"}>
    <div className={"text-gray-500"}>{title}</div>
    <div className={"text-xl ml-[1em]"}>{children}</div>
  </div>
);
