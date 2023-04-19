import { useEffect, useState } from "react";
import { TransferListItem } from "@components/atoms/TransferList";
import { SummaryCategoryTransferPresenter } from "./SummaryCategoryTransferPresenter";
import { useGetSummaryCategories } from "./useGetSummaryCategories";
import { useCreateSummaryCategories } from "./useCreateSummaryCategories";

export const SummaryCategoryTransferContainer = () => {
  const [transferData, setTransferData] = useState<
    [TransferListItem[], TransferListItem[]]
  >([[], []]);
  const [deleteIdListState, setDeleteIdListState] = useState<string[]>([]);
  const [opened, setOpened] = useState<boolean>(false);
  const onClose = () => setOpened(false);

  const { unselectCategories, selectedCategories, deleteIdList } =
    useGetSummaryCategories();
  const { mutation } = useCreateSummaryCategories();

  const registerClickHandler = () => {
    mutation({
      selectedCategories: transferData[1],
      deleteIdList: deleteIdListState,
    });
    onClose();
  };
  const resetClickHandler = () => {
    setTransferData([unselectCategories, selectedCategories]);
    setDeleteIdListState(deleteIdList);
  };

  useEffect(resetClickHandler, []);

  return (
    <SummaryCategoryTransferPresenter
      transferData={transferData}
      setTransferData={setTransferData}
      registerClickHandler={registerClickHandler}
      resetClickHandler={resetClickHandler}
      opened={opened}
      onOpen={() => setOpened(true)}
      onClose={onClose}
    />
  );
};
