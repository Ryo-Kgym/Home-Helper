import { TableProps } from "@components/atoms/Table";
import { RangeDatePicker } from "@components/molecules/RangeDatePicker";
import { Modal } from "@components/atoms/Modal";
import { UpdateDailyDetail } from "@components/organisms/update_daily_detail";
import { DailyDetail } from "@domain/model/household/DailyDetail";
import { DailyTable } from "@components/organisms/daily_table/DailyTable";

type DailySearchPresenterProps = {
  fromDate: Date | null;
  changeFromDate: (_: Date) => void;
  toDate: Date | null;
  changeToDate: (_: Date) => void;
  tablePropsList: TableProps[];
  incomeTotal: number | undefined;
  outcomeTotal: number | undefined;
  disabled: boolean;
  modifyModalOpen: boolean;
  modifyOnClose: () => void;
  detailForUpdate: DailyDetail | null;
};
export const DailySearchPresenter = ({
  fromDate,
  changeFromDate,
  toDate,
  changeToDate,
  tablePropsList,
  incomeTotal,
  outcomeTotal,
  disabled,
  modifyModalOpen,
  modifyOnClose,
  detailForUpdate,
}: DailySearchPresenterProps) => (
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
    <Modal opened={modifyModalOpen} onClose={modifyOnClose}>
      <UpdateDailyDetail initData={detailForUpdate} onClose={modifyOnClose} />
    </Modal>
  </div>
);
