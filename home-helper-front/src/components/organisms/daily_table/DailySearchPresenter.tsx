import { FC } from "react";
import { TableProps } from "@components/atoms/Table";
import { RangeDatePicker } from "@components/molecules/RangeDatePicker";
import { Modal } from "@components/atoms/Modal";
import { UpdateDailyDetail } from "@components/organisms/update_daily_detail";
import { DailyDetail } from "@domain/model/household/DailyDetail";
import { DailyTable } from "@components/organisms/daily_table/DailyTable";

type DailySearchPresenterProps = {
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
export const DailySearchPresenter: FC<DailySearchPresenterProps> = ({
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
    <DailyTable
      tablePropsList={tablePropsList}
      incomeTotal={incomeTotal}
      outcomeTotal={outcomeTotal}
    />
    <Modal opened={modalOpen} onClose={onClose}>
      <UpdateDailyDetail initData={detailForUpdate} onClose={onClose} />
    </Modal>
  </div>
);
