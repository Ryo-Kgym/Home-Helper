import { FC } from "react";
import { TransferList, TransferListItem } from "@components/atoms/TransferList";
import { Button } from "@components/atoms/Button";
import { RegisterSummaryCategoryConfirmPrompt } from "@components/organisms/master/yearlySummaryCategory/RegisterSummaryCategoryConfirmPrompt";

type SalaryTransferPresenterProps = {
  transferData: [TransferListItem[], TransferListItem[]];
  setTransferData: (data: [TransferListItem[], TransferListItem[]]) => void;
  resetClickHandler: () => void;
  opened: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const SummaryCategoryTransferPresenter: FC<
  SalaryTransferPresenterProps
> = ({
  transferData,
  setTransferData,
  resetClickHandler,
  opened,
  onOpen,
  onClose,
}) => (
  <div className={"grid"}>
    <TransferList data={transferData} setData={setTransferData} />
    <Button colorType={"register"} onClick={onOpen} />
    <Button colorType={"reset"} onClick={resetClickHandler} />
    <RegisterSummaryCategoryConfirmPrompt
      opened={opened}
      onClose={onClose}
      selectedCategories={transferData[1]}
    />
  </div>
);
