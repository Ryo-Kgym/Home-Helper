/*
 * Copyright (c) 2023 Ryo-Kgym.
 */
"use client";

import { Table } from "@components/atoms/Table";
import { useGetAllGenreQuery } from "@graphql/hasura/generated/hasuraGraphql";
import { useGroup } from "@hooks/group/useGroup";
import { useGenreHolder } from "@hooks/genre/useGenreHolder";
import { getLabel as getGenreTypeLabel } from "@domain/model/household/GenreType";
import { getLabel as getIocomeTypeLabel } from "@domain/model/household/IocomeType";
import { ValidityStatus } from "@components/atoms";

export const GenreTable = () => {
  const { save } = useGenreHolder();
  const { groupId } = useGroup();
  const [{ data, fetching }] = useGetAllGenreQuery({
    variables: {
      groupId,
    },
  });

  if (fetching) return <div>Loading....</div>;

  return (
    <Table
      header={[
        "ジャンル名",
        "ジャンル区分",
        "収支区分",
        "有効・無効",
        "表示順",
      ]}
      tablePropsList={
        data?.genre.map(
          ({
            id: genreId,
            genreName,
            genreType,
            iocomeType,
            displayOrder,
            validFlag,
          }) => ({
            keyPrefix: "genre",
            columns: [
              { value: genreName },
              {
                value: getGenreTypeLabel(genreType),
                align: "center",
              },
              { value: getIocomeTypeLabel(iocomeType), align: "center" },
              {
                value: <ValidityStatus value={validFlag ?? true} />,
                align: "center",
              },
              { value: displayOrder, align: "right" },
            ],
            onClick: () => {
              save({ genreId });
            },
          }),
        ) ?? []
      }
      size={"xs"}
    />
  );
};
