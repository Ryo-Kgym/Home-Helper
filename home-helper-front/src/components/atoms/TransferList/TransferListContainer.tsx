import { TransferListPresenter } from "./TransferListPresenter";
import { TransferListItem } from "@components/atoms/TransferList/index";

type TransferListContainerProps = {
  data: [TransferListItem[], TransferListItem[]];
  setData: (_: [TransferListItem[], TransferListItem[]]) => void;
};

export const TransferListContainer = ({
  data,
  setData,
}: TransferListContainerProps) => (
  <TransferListPresenter data={data} setData={setData} />
);
