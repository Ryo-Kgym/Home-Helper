import {
  IocomeType,
  useGetAllCategoryListWithCriteriaQuery,
  useGetYearlySummaryCategoriesByUserIdQuery,
} from "@graphql/postgraphile/generated/graphql";
import { TransferListItem } from "@components/atoms/TransferList";
import { useUser } from "@hooks/user/useUser";

export const useGetYearlySummaryCategories = () => {
  const { userId } = useUser();
  const [{ data: yearlySummaryCategoriesData }] =
    useGetYearlySummaryCategoriesByUserIdQuery({
      variables: {
        userId,
      },
    });

  const selectedCategories: TransferListItem[] =
    yearlySummaryCategoriesData?.categories
      ?.map((c) => c.category)
      .map((c) => ({
        value: c!.id,
        label: c!.name,
        group: c!.genre?.name,
      })) ?? [];

  const [{ data }] = useGetAllCategoryListWithCriteriaQuery({
    variables: {
      validCategoryIn: [true],
      validGenreIn: [true],
      iocomeTypeIn: [IocomeType.Income, IocomeType.Outcome],
      categoryNotIn: selectedCategories.map((c) => c.value),
    },
  });

  const unselectCategories: TransferListItem[] =
    data?.genres?.flatMap((g) => {
      return g.categories.map((c) => {
        return { value: c.id, label: c.name, group: g.name };
      });
    }) ?? [];

  return {
    unselectCategories,
    selectedCategories,
  };
};
