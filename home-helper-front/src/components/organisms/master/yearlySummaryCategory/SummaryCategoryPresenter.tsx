import { FC } from "react";
import { TransferList, TransferListItem } from "@components/atoms/TransferList";
import { Button } from "@components/atoms/Button";

type SalaryTransferPresenterProps = {
  transferData: [TransferListItem[], TransferListItem[]];
  setTransferData: (data: [TransferListItem[], TransferListItem[]]) => void;
  registerClickHandler: () => void;
  resetClickHandler: () => void;
};

export const SummaryCategoryPresenter: FC<SalaryTransferPresenterProps> = ({
  transferData,
  setTransferData,
  registerClickHandler,
  resetClickHandler,
}) => (
  <div className={"grid"}>
    <TransferList data={transferData} setData={setTransferData} />
    <Button colorType={"register"} onClick={registerClickHandler} />
    <Button colorType={"reset"} onClick={resetClickHandler} />
  </div>
);