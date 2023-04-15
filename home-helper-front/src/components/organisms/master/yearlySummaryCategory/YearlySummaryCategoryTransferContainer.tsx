import { useEffect, useState } from "react";
import { TransferListItem } from "@components/atoms/TransferList";
import { YearlySummaryCategoryPresenter } from "./YearlySummaryCategoryPresenter";
import { useGetYearlySummaryCategories } from "./useGetYearlySummaryCategories";

export const YearlySummaryCategoryTransferContainer = () => {
  const [transferData, setTransferData] = useState<
    [TransferListItem[], TransferListItem[]]
  >([[], []]);

  const registerClickHandler = () => {};
  const resetClickHandler = () => {};

  const { unselectCategories, selectedCategories } =
    useGetYearlySummaryCategories();

  useEffect(() => {
    setTransferData([unselectCategories, selectedCategories]);
  }, []);

  return (
    <YearlySummaryCategoryPresenter
      transferData={transferData}
      setTransferData={setTransferData}
      registerClickHandler={registerClickHandler}
      resetClickHandler={resetClickHandler}
    />
  );
};
