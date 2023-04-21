import { FC } from "react";
import { TransferListItem } from "@components/atoms/TransferList";
import { useCreateSummaryCategories } from "@components/organisms/master/summary_category/useCreateSummaryCategories";
import { RegisterSummaryCategoryConfirmPromptPresenter } from "./RegisterSummaryCategoryConfirmPromptPresenter";
import { useRouter } from "next/router";

type RegisterSummaryCategoryConfirmPromptContainerProps = {
  opened: boolean;
  onClose: () => void;
  selectedCategories: TransferListItem[];
};

export const RegisterSummaryCategoryConfirmPromptContainer: FC<
  RegisterSummaryCategoryConfirmPromptContainerProps
> = ({ opened, onClose, selectedCategories }) => {
  const router = useRouter();
  const { createSummaryCategories } = useCreateSummaryCategories();

  const doneClickHandler = () => {
    setTimeout(() => {
      createSummaryCategories({ selectedCategories });
      onClose();
    }, 0);
    setTimeout(() => {
      router.reload();
    }, 100);
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
