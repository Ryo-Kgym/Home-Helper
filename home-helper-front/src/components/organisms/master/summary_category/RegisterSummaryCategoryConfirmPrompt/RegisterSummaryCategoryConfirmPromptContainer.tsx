import { FC } from "react";
import { TransferListItem } from "@components/atoms/TransferList";
import { useCreateSummaryCategories } from "@components/organisms/master/summary_category/useCreateSummaryCategories";
import { RegisterSummaryCategoryConfirmPromptPresenter } from "./RegisterSummaryCategoryConfirmPromptPresenter";

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
