import { useUser } from "@hooks/user/useUser";
import {
  useCreateSummaryCategoryMutation,
  useDeleteSummaryCategoryByIdMutation,
  useGetSummaryCategoriesByUserIdQuery,
} from "@graphql/postgraphile/generated/graphql";
import { TransferListItem } from "@components/atoms/TransferList";
import { useUuid } from "@hooks/uuid/useUuid";

export const useCreateSummaryCategories = () => {
  const { userId } = useUser();
  const { get } = useUuid();
  const [_deleteResult, deleteMutation] =
    useDeleteSummaryCategoryByIdMutation();
  const [_createResult, createMutation] = useCreateSummaryCategoryMutation();

  const [{ data: summaryCategoriesData }] =
    useGetSummaryCategoriesByUserIdQuery({
      variables: {
        userId,
      },
    });
  console.log(
    "summaryCategoriesData",
    summaryCategoriesData?.categories?.map((c) => c.category?.name).join(", ")
  );
  const deleteIdList: string[] =
    summaryCategoriesData?.categories?.map((c) => c.id) ?? [];

  const deleteSummaryCategories = () => {
    deleteIdList.forEach((id) => {
      return deleteMutation({ id });
    });
  };

  const createSummaryCategories = ({
    selectedCategories,
  }: UseCreateSummaryCategoriesArgs) => {
    selectedCategories.forEach((item, idx) => {
      return createMutation({
        id: get(),
        userId,
        categoryId: item.value,
        displayOrder: idx,
      });
    });
  };

  const mutation = (args: UseCreateSummaryCategoriesArgs) => {
    deleteSummaryCategories();
    createSummaryCategories(args);
  };

  return {
    mutation,
  };
};

type UseCreateSummaryCategoriesArgs = {
  selectedCategories: TransferListItem[];
};
