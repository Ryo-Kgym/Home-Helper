/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { Button } from "@components/atoms/Button";
import { TransferList, TransferListItem } from "@components/atoms/TransferList";
import { RegisterSummaryCategoryConfirmPrompt } from "./RegisterSummaryCategoryConfirmPrompt";

type SalaryTransferPresenterProps = {
  transferData: [TransferListItem[], TransferListItem[]];
  setTransferData: (_: [TransferListItem[], TransferListItem[]]) => void;
  resetClickHandler: () => void;
  opened: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const SummaryCategoryTransferPresenter = ({
  transferData,
  setTransferData,
  resetClickHandler,
  opened,
  onOpen,
  onClose,
}: SalaryTransferPresenterProps) => (
  <div className={"grid"}>
    <TransferList data={transferData} setData={setTransferData} />
    <div className={"flex"}>
      <Button colorType={"register"} onClick={onOpen} />
      <Button colorType={"reset"} onClick={resetClickHandler} />
    </div>
    <RegisterSummaryCategoryConfirmPrompt
      opened={opened}
      onClose={onClose}
      selectedCategories={transferData[1]}
    />
  </div>
);
