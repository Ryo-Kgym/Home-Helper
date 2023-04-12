import { FC } from "react";
import { TransferListPresenter } from "./TransferListPresenter";
import { TransferListItem } from "@components/atoms/TransferList/index";

type TransferListContainerProps = {
  data: [TransferListItem[], TransferListItem[]];
  setData: (data: [TransferListItem[], TransferListItem[]]) => void;
};

export const TransferListContainer: FC<TransferListContainerProps> = ({
  data,
  setData,
}) => {
  return <TransferListPresenter data={data} setData={setData} />;
};
