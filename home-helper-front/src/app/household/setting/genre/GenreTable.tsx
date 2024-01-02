/*
 * Copyright (c) 2024 Ryo-Kgym.
 */
"use client";

import { Table } from "@components/atoms/Table";
import { useGetAllGenreQuery } from "@graphql/hasura/generated/hasuraGraphql";
import { useGroup } from "@hooks/group/useGroup";
import {
  GenreType,
  getLabel as getGenreTypeLabel,
} from "@domain/model/household/GenreType";
import {
  getLabel as getIocomeTypeLabel,
  IocomeType,
} from "@domain/model/household/IocomeType";
import { ValidityStatus } from "@components/atoms";
import { useRouter } from "next/navigation";

export const GenreTable = () => {
  const { push } = useRouter();
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
                value: getGenreTypeLabel(genreType as GenreType),
                align: "center",
              },
              {
                value: getIocomeTypeLabel(iocomeType as IocomeType),
                align: "center",
              },
              {
                value: <ValidityStatus value={validFlag ?? true} />,
                align: "center",
              },
              { value: displayOrder, align: "right" },
            ],
            onClick: () => {
              push(`/household/setting/genre/edit/${genreId}`);
            },
          }),
        ) ?? []
      }
      size={"xs"}
      defaultBottom={false}
    />
  );
};
