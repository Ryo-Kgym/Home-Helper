import { FC } from "react";
import { TransferList, TransferListItem } from "@components/atoms/TransferList";
import { Button } from "@components/atoms/Button";

type SalaryTransferPresenterProps = {
  transferData: [TransferListItem[], TransferListItem[]];
  setData: (data: [TransferListItem[], TransferListItem[]]) => void;
  registerClickHandler: () => void;
  resetClickHandler: () => void;
};

export const SalaryTransferPresenter: FC<SalaryTransferPresenterProps> = ({
  transferData,
  setData,
  registerClickHandler,
  resetClickHandler,
}) => (
  <div className={"grid"}>
    <TransferList data={transferData} setData={setData} />
    <Button colorType={"register"} onClick={registerClickHandler} />
    <Button colorType={"reset"} onClick={resetClickHandler} />
  </div>
);
