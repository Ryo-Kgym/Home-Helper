/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { useGetValidCategoryByGenreIdQuery } from "@graphql/hasura/generated/hasuraGraphql";
import { useGroup } from "@hooks/group/useGroup";
import { Select } from "@components/ui";

type CategorySelectProps = {
  categoryId: string | null;
  setCategoryId: (_: string | null) => void;
  genreId: string | null;
  setCategoryName?: (_: string | null) => void;
};
export const CategorySelect = ({
  categoryId,
  setCategoryId,
  genreId,
  setCategoryName = () => {},
}: CategorySelectProps) => {
  const { groupId } = useGroup();
  const [{ data }] = useGetValidCategoryByGenreIdQuery({
    variables: { genreId: genreId ?? "", groupId },
  });

  const categories =
    data?.allCategoriesList?.map((genre) => {
      return {
        label: genre.categoryName,
        value: genre.categoryId,
      };
    }) ?? [];

  return (
    <Select
      label={"CATEGORY"}
      value={categoryId}
      onChange={(value) => {
        const categoryName =
          categories.find((c) => c.value === value)?.label ?? "";
        setCategoryId(value);
        setCategoryName(categoryName);
      }}
      data={categories}
      placeholder={"カテゴリを選択してください"}
      withAsterisk
    />
  );
};
