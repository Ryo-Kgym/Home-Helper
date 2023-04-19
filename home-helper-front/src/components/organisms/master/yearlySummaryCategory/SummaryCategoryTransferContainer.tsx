import { useEffect, useState } from "react";
import { TransferListItem } from "@components/atoms/TransferList";
import { SummaryCategoryPresenter } from "./SummaryCategoryPresenter";
import { useGetSummaryCategories } from "./useGetSummaryCategories";
import { useCreateSummaryCategories } from "./useCreateSummaryCategories";
import { useRouter } from "next/router";

export const SummaryCategoryTransferContainer = () => {
  const router = useRouter();

  const [transferData, setTransferData] = useState<
    [TransferListItem[], TransferListItem[]]
  >([[], []]);
  const [deleteIdListState, setDeleteIdListState] = useState<string[]>([]);

  const { unselectCategories, selectedCategories, deleteIdList } =
    useGetSummaryCategories();
  const { mutation } = useCreateSummaryCategories();

  const registerClickHandler = () => {
    mutation({
      selectedCategories: transferData[1],
      deleteIdList: deleteIdListState,
    });
    // ToDo ここでリロードするのは良くない
    router.reload();
  };
  const resetClickHandler = () => {
    setTransferData([unselectCategories, selectedCategories]);
    setDeleteIdListState(deleteIdList);
  };

  useEffect(resetClickHandler, []);

  return (
    <SummaryCategoryPresenter
      transferData={transferData}
      setTransferData={setTransferData}
      registerClickHandler={registerClickHandler}
      resetClickHandler={resetClickHandler}
    />
  );
};