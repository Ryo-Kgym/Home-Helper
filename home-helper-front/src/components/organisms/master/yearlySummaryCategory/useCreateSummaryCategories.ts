import { useUser } from "@hooks/user/useUser";
import {
  useCreateSummaryCategoryMutation,
  useDeleteSummaryCategoryByIdMutation,
} from "@graphql/postgraphile/generated/graphql";
import { TransferListItem } from "@components/atoms/TransferList";
import { useUuid } from "@hooks/uuid/useUuid";

export const useCreateSummaryCategories = () => {
  const { userId } = useUser();
  const { get } = useUuid();
  const [_deleteResult, deleteMutation] =
    useDeleteSummaryCategoryByIdMutation();
  const [_createResult, createMutation] = useCreateSummaryCategoryMutation();

  const deleteSummaryCategories = ({
    deleteIdList,
  }: {
    deleteIdList: string[];
  }) => {
    deleteIdList.forEach((id) => {
      return deleteMutation({ id });
    });
  };

  const createSummaryCategories = ({
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

  const mutation = ({
    selectedCategories,
    deleteIdList,
  }: UseCreateSummaryCategoriesArgs) => {
    deleteSummaryCategories({ deleteIdList });
    createSummaryCategories({ selectedCategories });
  };

  return {
    mutation,
  };
};

type UseCreateSummaryCategoriesArgs = {
  selectedCategories: TransferListItem[];
  deleteIdList: string[];
};
