import { useEffect, useState } from "react";
import { TransferListItem } from "@components/atoms/TransferList";
import { SummaryCategoryPresenter } from "./SummaryCategoryPresenter";
import { useGetSummaryCategories } from "./useGetSummaryCategories";

export const SummaryCategoryTransferContainer = () => {
  const [transferData, setTransferData] = useState<
    [TransferListItem[], TransferListItem[]]
  >([[], []]);

  const registerClickHandler = () => {};
  const resetClickHandler = () => {};

  const { unselectCategories, selectedCategories } = useGetSummaryCategories();

  useEffect(() => {
    setTransferData([unselectCategories, selectedCategories]);
  }, []);

  return (
    <SummaryCategoryPresenter
      transferData={transferData}
      setTransferData={setTransferData}
      registerClickHandler={registerClickHandler}
      resetClickHandler={resetClickHandler}
    />
  );
};
