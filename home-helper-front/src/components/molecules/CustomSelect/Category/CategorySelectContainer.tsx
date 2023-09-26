import { CategorySelectPresenter } from "./CategorySelectPresenter";
import { useGetValidCategoryByGenreIdQuery } from "@graphql/hasura/generated/hasuraGraphql";
import { useGroup } from "@hooks/group/useGroup";

type CategorySelectContainerProps = {
  categoryId: string | null;
  setCategoryId: (_: string | null) => void;
  genreId: string | null;
  setCategoryName?: (_: string | null) => void;
};
export const CategorySelectContainer = ({
  categoryId,
  setCategoryId,
  genreId,
  setCategoryName = () => {},
}: CategorySelectContainerProps) => {
  const { groupId } = useGroup();
  const [{ data }] = useGetValidCategoryByGenreIdQuery({
    variables: { genreId: genreId ?? "", groupId },
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
