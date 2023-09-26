import { TransferList, TransferListData } from "@mantine/core";

type TransferListPresenterProps = {
  data: TransferListData;
  setData: (_: TransferListData) => void;
  listHeight?: number;
};

export const TransferListPresenter = ({
  data,
  setData,
  listHeight = 500,
}: TransferListPresenterProps) => (
  <TransferList
    value={data}
    onChange={setData}
    searchPlaceholder="Search..."
    nothingFound="Nothing here"
    listHeight={listHeight}
  />
);
