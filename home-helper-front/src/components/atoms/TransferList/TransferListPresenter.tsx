import { FC } from "react";
import { TransferList, TransferListData } from "@mantine/core";

type TransferListPresenterProps = {
  data: TransferListData;
  setData: (data: TransferListData) => void;
  listHeight?: number;
};

export const TransferListPresenter: FC<TransferListPresenterProps> = ({
  data,
  setData,
  listHeight = 500,
}) => (
  <TransferList
    value={data}
    onChange={setData}
    searchPlaceholder="Search..."
    nothingFound="Nothing here"
    listHeight={listHeight}
  />
);
