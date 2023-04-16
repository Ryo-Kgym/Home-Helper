import { useEffect, useState } from "react";
import { TransferListItem } from "@components/atoms/TransferList";
import { SummaryCategoryPresenter } from "./SummaryCategoryPresenter";
import { useGetSummaryCategories } from "./useGetSummaryCategories";

export const SummaryCategoryTransferContainer = () => {
  const [transferData, setTransferData] = useState<
    [TransferListItem[], TransferListItem[]]
  >([[], []]);

  const { unselectCategories, selectedCategories } = useGetSummaryCategories();

  const registerClickHandler = () => {};
  const resetClickHandler = () => {
    setTransferData([unselectCategories, selectedCategories]);
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
