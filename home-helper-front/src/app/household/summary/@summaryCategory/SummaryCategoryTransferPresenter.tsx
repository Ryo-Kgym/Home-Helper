/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { Button } from "@components/atoms/Button/index";
import { TransferList, TransferListItem } from "@components/ui/index";

type SalaryTransferPresenterProps = {
  transferData: [TransferListItem[], TransferListItem[]];
  setTransferData: (_: [TransferListItem[], TransferListItem[]]) => void;
  resetClickHandler: () => void;
  registerHandler: () => void;
};

export const SummaryCategoryTransferPresenter = ({
  transferData,
  setTransferData,
  resetClickHandler,
  registerHandler,
}: SalaryTransferPresenterProps) => (
  <div>
    <div className={"flex"}>
      <Button colorType={"register"} onClick={registerHandler} />
      <Button colorType={"reset"} onClick={resetClickHandler} />
    </div>
    <TransferList data={transferData} setData={setTransferData} />
  </div>
);
