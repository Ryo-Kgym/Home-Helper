import { FC } from "react";
import { Table, TableProps } from "@components/atoms/Table";
import { Modal } from "@components/atoms/Modal";
import { SetProperties } from "@components/organisms/file_import/SetProperties";
import { LoadFileProps } from "@components/organisms/file_import/loadUploadFile";
import { IocomeTotal } from "@components/molecules/Total";

type FileImportTablePresenterProps = {
  tableProps: TableProps[];
  opened: boolean;
  onClose: () => void;
  initialValues: LoadFileProps;
  loadData: LoadFileProps[];
  setLoadData: (loadData: LoadFileProps[]) => void;
  income: number | undefined;
  outcome: number | undefined;
};
export const FileImportTablePresenter: FC<FileImportTablePresenterProps> = ({
  tableProps,
  opened,
  onClose,
  initialValues,
  loadData,
  setLoadData,
  income,
  outcome,
}) => (
  <div className={"grid"}>
    <div>
      <Table
        header={["決済日", "備考", "支出金額", "ジャンル", "カテゴリ"]}
        tablePropsList={tableProps}
        size={"xs"}
        height={"75vh"}
      />
    </div>
    <div>
      <IocomeTotal income={income} outcome={outcome} />
    </div>
    <Modal opened={opened} onClose={onClose}>
      <SetProperties
        initialValues={initialValues}
        initLoadData={loadData}
        setLoadData={setLoadData}
        onClose={onClose}
      />
    </Modal>
  </div>
);
