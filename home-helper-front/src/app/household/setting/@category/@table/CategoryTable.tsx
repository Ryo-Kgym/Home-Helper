/*
 * Copyright (c) 2023 Ryo-Kgym.
 */
"use client";

import { Table } from "@components/atoms/Table";
import { useGetAllCategoriesQuery } from "@graphql/hasura/generated/hasuraGraphql";
import { useGroup } from "@hooks/group/useGroup";
import { useCategoryHolder } from "@hooks/category/useCategoryHolder";
import { ValidityStatus } from "@components/atoms";

export const CategoryTable = () => {
  const { save } = useCategoryHolder();
  const { groupId } = useGroup();
  const [{ data, fetching }] = useGetAllCategoriesQuery({
    variables: {
      groupId,
    },
  });

  if (fetching) return <div>Loading....</div>;

  return (
    <Table
      header={["カテゴリ名", "ジャンル名", "有効・無効", "表示順"]}
      tablePropsList={
        data?.categories.map(
          ({
            id: categoryId,
            categoryName,
            displayOrder,
            validFlag,
            genre: { genreName },
          }) => ({
            keyPrefix: "category",
            columns: [
              { value: categoryName },
              { value: genreName },
              {
                value: <ValidityStatus value={validFlag ?? true} />,
                align: "center",
              },
              { value: displayOrder, align: "right" },
            ],
            onClick: () => {
              save({ categoryId });
            },
          }),
        ) ?? []
      }
      size={"xs"}
    />
  );
};
