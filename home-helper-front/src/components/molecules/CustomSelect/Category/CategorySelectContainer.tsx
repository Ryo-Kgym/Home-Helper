import { FC } from "react";
import { CategorySelectPresenter } from "./CategorySelectPresenter";
import { useGetValidCategoryByGenreIdQuery } from "@graphql/postgraphile/generated/graphql";

type CategorySelectContainerProps = {
  genreId: string;
};
export const CategorySelectContainer: FC<CategorySelectContainerProps> = ({
  genreId,
}) => {
  const [{ data }] = useGetValidCategoryByGenreIdQuery({
    variables: { genreId: genreId },
  });

  const categories =
    data?.allCategoriesList?.map((genre) => {
      return {
        label: genre.categoryName,
        value: genre.categoryId,
        description: genre.categoryName,
      };
    }) ?? [];

  return <CategorySelectPresenter categories={categories} />;
};
