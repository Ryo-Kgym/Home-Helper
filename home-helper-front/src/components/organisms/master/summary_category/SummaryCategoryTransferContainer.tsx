/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { useState } from "react";
import { TransferListItem } from "components/ui";
import { SummaryCategoryTransferPresenter } from "./SummaryCategoryTransferPresenter";
import { useGetSummaryCategories } from "./useGetSummaryCategories";

export const SummaryCategoryTransferContainer = () => {
  const [transferData, setTransferData] = useState<
    [TransferListItem[], TransferListItem[]]
  >([[], []]);
  const isEmpty = transferData[0].length === 0 && transferData[1].length === 0;
  const [opened, setOpened] = useState<boolean>(false);
  const onClose = () => setOpened(false);

  const resetClickHandler = () => {
    setTransferData([unselectCategories, selectedCategories]);
  };

  const { unselectCategories, selectedCategories } = useGetSummaryCategories();

  return (
    <SummaryCategoryTransferPresenter
      transferData={
        isEmpty ? [unselectCategories, selectedCategories] : transferData
      }
      setTransferData={setTransferData}
      resetClickHandler={resetClickHandler}
      opened={opened}
      onOpen={() => setOpened(true)}
      onClose={onClose}
    />
  );
};
