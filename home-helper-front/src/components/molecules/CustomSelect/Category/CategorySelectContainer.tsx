import { FC } from "react";
import { CategorySelectPresenter } from "./CategorySelectPresenter";
import { useGetValidCategoryByGenreIdQuery } from "@graphql/postgraphile/generated/graphql";

type CategorySelectContainerProps = {
  categoryId: string | null;
  setCategoryId: (value: string | null) => void;
  genreId: string | null;
  setCategoryName?: (value: string | null) => void;
};
export const CategorySelectContainer: FC<CategorySelectContainerProps> = ({
  categoryId,
  setCategoryId,
  genreId,
  setCategoryName = () => {},
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
      onChange={(value) => {
        const categoryName =
          categories.find((c) => c.value === value)?.label ?? "";
        setCategoryId(value);
        setCategoryName(categoryName);
      }}
      categories={categories}
    />
  );
};
