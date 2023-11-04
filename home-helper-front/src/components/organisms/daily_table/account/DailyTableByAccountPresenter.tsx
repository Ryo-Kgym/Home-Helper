/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { TableProps } from "@components/atoms/Table";
import { DailyTable } from "@components/organisms/daily_table/DailyTable";
import { Modal } from "@components/atoms/Modal";
import { ChangeDetail } from "@components/organisms/";
import { DailyDetail } from "@domain/model/household/DailyDetail";

type DailyTableByCategoryPresenterProps = {
  tableProps: TableProps[];
  incomeTotal: number | undefined;
  outcomeTotal: number | undefined;
  modifyModalOpen: boolean;
  modifyOnClose: () => void;
  detailForUpdate: DailyDetail | null;
};
export const DailyTableByAccountPresenter = ({
  tableProps,
  incomeTotal,
  outcomeTotal,
  modifyModalOpen,
  modifyOnClose,
  detailForUpdate,
}: DailyTableByCategoryPresenterProps) => (
  <div>
    <DailyTable
      tablePropsList={tableProps}
      incomeTotal={incomeTotal}
      outcomeTotal={outcomeTotal}
    />
    <Modal opened={modifyModalOpen} onClose={modifyOnClose}>
      <ChangeDetail initData={detailForUpdate} onClose={modifyOnClose} />
    </Modal>
  </div>
);
