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
  const [{ data: deleteData }] = useGetSummaryCategoriesByUserIdQuery({
    variables: {
      userId,
    },
  });
  const [_createResult, createMutation] = useCreateSummaryCategoryMutation();

  const deleteSummaryCategories = () => {
    deleteData?.categories?.forEach((c) => {
      deleteMutation({ id: c.id });
    });
  };

  const insertSummaryCategories = ({
    selectedCategories,
  }: {
    selectedCategories: TransferListItem[];
  }) => {
    selectedCategories.forEach((item, idx) => {
      return createMutation({
        id: get(),
        userId,
        categoryId: item.value,
        displayOrder: idx,
      });
    });
  };

  const createSummaryCategories = ({
    selectedCategories,
  }: UseCreateSummaryCategoriesArgs) => {
    deleteSummaryCategories();
    insertSummaryCategories({ selectedCategories });
  };

  return {
    createSummaryCategories,
  };
};

type UseCreateSummaryCategoriesArgs = {
  selectedCategories: TransferListItem[];
};
