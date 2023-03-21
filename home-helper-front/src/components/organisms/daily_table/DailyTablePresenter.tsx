import { FC } from "react";
import { Table, TableProps } from "@components/atoms/Table";
import { RangeDatePicker } from "@components/molecules/RangeDatePicker";
import { IocomeTotal } from "@components/molecules/Total";
import { Modal } from "@components/atoms/Modal";
import { UpdateDailyDetail } from "@components/organisms/update_daily_detail";
import { DailyDetail } from "@hooks/household/daily_detail/useGetDailyDetailByDate";

type DailyTablePresenterProps = {
  fromDate: Date | null;
  changeFromDate: (date: Date) => void;
  toDate: Date | null;
  changeToDate: (date: Date) => void;
  tablePropsList: TableProps[];
  incomeTotal: number | undefined;
  outcomeTotal: number | undefined;
  disabled: boolean;
  modalOpen: boolean;
  onClose: () => void;
  detailForUpdate: DailyDetail | null;
};
export const DailyTablePresenter: FC<DailyTablePresenterProps> = ({
  fromDate,
  changeFromDate,
  toDate,
  changeToDate,
  tablePropsList,
  incomeTotal,
  outcomeTotal,
  disabled,
  modalOpen,
  onClose,
  detailForUpdate,
}) => (
  <div>
    <RangeDatePicker
      fromDate={fromDate}
      changeFromDate={changeFromDate}
      toDate={toDate}
      changeToDate={changeToDate}
      disabled={disabled}
    />
    <Table
      header={["日付", "ジャンル", "カテゴリ", "アカウント", "金額", "メモ"]}
      tablePropsList={tablePropsList}
      size={"xs"}
    />
    <IocomeTotal income={incomeTotal} outcome={outcomeTotal} />
    <Modal opened={modalOpen} onClose={onClose}>
      <UpdateDailyDetail initData={detailForUpdate} />
    </Modal>
  </div>
);
