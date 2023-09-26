/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { TransferListItem } from "@components/atoms/TransferList";
import { useCreateSummaryCategories } from "@components/organisms/master/summary_category/useCreateSummaryCategories";
import { FC } from "react";
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

  const doneClickHandler = async () => {
    try {
      await createSummaryCategories({ selectedCategories });
      onClose();
    } catch (e) {
      console.error(e);
    }
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
