import {
  IocomeType,
  useGetAllCategoryListWithCriteriaQuery,
  useGetYearlySummaryCategoriesByUserIdQuery,
} from "@graphql/postgraphile/generated/graphql";
import { TransferListItem } from "@components/atoms/TransferList";
import { useUser } from "@hooks/user/useUser";

export const useYearlySummaryCategories = () => {
  const { userId } = useUser();
  const [{ data }] = useGetAllCategoryListWithCriteriaQuery({
    variables: {
      categoryIn: [true],
      genreIn: [true],
      iocomeTypeIn: [IocomeType.Income, IocomeType.Outcome],
    },
  });

  const [{ data: yearlySummaryCategoriesData }] =
    useGetYearlySummaryCategoriesByUserIdQuery({
      variables: {
        userId,
      },
    });

  const unselectCategories: TransferListItem[] =
    data?.genres?.flatMap((g) => {
      return g.categories.map((c) => {
        return { value: c.id, label: c.name, group: g.name };
      });
    }) ?? [];

  const selectedCategories: TransferListItem[] =
    yearlySummaryCategoriesData?.categories
      ?.map((c) => c.category)
      .map((c) => ({
        value: c!.id,
        label: c!.name,
        group: c!.genre?.name,
      })) ?? [];

  return {
    unselectCategories,
    selectedCategories,
  };
};
