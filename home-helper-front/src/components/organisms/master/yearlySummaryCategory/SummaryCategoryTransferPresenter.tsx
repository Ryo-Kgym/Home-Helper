import { FC } from "react";
import { TransferList, TransferListItem } from "@components/atoms/TransferList";
import { Button } from "@components/atoms/Button";
import { ConfirmPrompt } from "@components/molecules/ConfirmPrompt";

type SalaryTransferPresenterProps = {
  transferData: [TransferListItem[], TransferListItem[]];
  setTransferData: (data: [TransferListItem[], TransferListItem[]]) => void;
  registerClickHandler: () => void;
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
  registerClickHandler,
  resetClickHandler,
  opened,
  onOpen,
  onClose,
}) => (
  <div className={"grid"}>
    <TransferList data={transferData} setData={setTransferData} />
    <Button colorType={"register"} onClick={onOpen} />
    <Button colorType={"reset"} onClick={resetClickHandler} />
    <ConfirmPrompt
      title={"以下のカテゴリを登録します。"}
      opened={opened}
      onClose={onClose}
      doneOnClickHandler={registerClickHandler}
    >
      <div className={"border-2"}>
        {transferData[1].map((item) => (
          <div key={item.value} className={"m-2"}>
            ・{item.label}
          </div>
        ))}
      </div>
    </ConfirmPrompt>
  </div>
);
