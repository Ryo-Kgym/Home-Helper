import { useEffect, useState } from "react";
import { TransferListItem } from "@components/atoms/TransferList";
import { SummaryCategoryTransferPresenter } from "./SummaryCategoryTransferPresenter";
import { useGetSummaryCategories } from "./useGetSummaryCategories";

export const SummaryCategoryTransferContainer = () => {
  const [transferData, setTransferData] = useState<
    [TransferListItem[], TransferListItem[]]
  >([[], []]);
  const [opened, setOpened] = useState<boolean>(false);
  const onClose = () => setOpened(false);

  const { unselectCategories, selectedCategories } = useGetSummaryCategories();

  const resetClickHandler = () => {
    setTransferData([unselectCategories, selectedCategories]);
  };

  useEffect(resetClickHandler, []);

  return (
    <SummaryCategoryTransferPresenter
      transferData={transferData}
      setTransferData={setTransferData}
      resetClickHandler={resetClickHandler}
      opened={opened}
      onOpen={() => setOpened(true)}
      onClose={onClose}
    />
  );
};
