import { FC } from "react";
import { CategorySelectPresenter } from "./CategorySelectPresenter";
import { useGetValidCategoryByGenreIdQuery } from "@graphql/postgraphile/generated/graphql";

type CategorySelectContainerProps = {
  categoryId: string | null;
  setCategoryId: (value: string | null) => void;
  genreId: string | null;
};
export const CategorySelectContainer: FC<CategorySelectContainerProps> = ({
  categoryId,
  setCategoryId,
  genreId,
}) => {
  const [{ data }] = useGetValidCategoryByGenreIdQuery({
    variables: { genreId: genreId ?? "" },
  });

  const categories =
    data?.allCategoriesList?.map((genre) => {
      return {
        label: genre.categoryName,
        value: genre.categoryId,
        description: genre.categoryName,
      };
    }) ?? [];

  return (
    <CategorySelectPresenter
      value={categoryId}
      onChange={setCategoryId}
      categories={categories}
    />
  );
};
