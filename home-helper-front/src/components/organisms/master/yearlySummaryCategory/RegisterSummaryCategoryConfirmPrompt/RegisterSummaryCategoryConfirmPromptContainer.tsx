import { RegisterSummaryCategoryConfirmPromptPresenter } from "@components/organisms/master/yearlySummaryCategory/RegisterSummaryCategoryConfirmPrompt/RegisterSummaryCategoryConfirmPromptPresenter";
import { useCreateSummaryCategories } from "@components/organisms/master/yearlySummaryCategory/useCreateSummaryCategories";
import { FC } from "react";
import { TransferListItem } from "@components/atoms/TransferList";

type RegisterSummaryCategoryConfirmPromptContainerProps = {
  opened: boolean;
  onClose: () => void;
  selectedCategories: TransferListItem[];
};

export const RegisterSummaryCategoryConfirmPromptContainer: FC<
  RegisterSummaryCategoryConfirmPromptContainerProps
> = ({ opened, onClose, selectedCategories }) => {
  const { createSummaryCategories } = useCreateSummaryCategories();

  const doneClickHandler = () => {
    createSummaryCategories({ selectedCategories });
    onClose();
  };

  return (
    <RegisterSummaryCategoryConfirmPromptPresenter
      opened={opened}
      onClose={onClose}
      doneClickHandler={doneClickHandler}
      selectedCategories={selectedCategories}
    />
  );
};
