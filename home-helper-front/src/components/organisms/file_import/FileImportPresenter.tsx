import { FC } from "react";
import { Table, TbodyProps } from "@components/atoms/Table";
import { GridTable } from "@components/molecules/GridTable";

type FileImportPresenterProps = {
  tbodyProps: TbodyProps[];
  yearMonths: any[];
};
export const FileImportPresenter: FC<FileImportPresenterProps> = ({
  yearMonths,
  tbodyProps,
}) => {
  return (
    <>
      <GridTable
        gridProps={[
          { label: "ファイル選択", components: "フィールド" },
          { label: "適用年月", components: "フィールド" },
          { label: "アカウント", components: "フィールド" },
        ]}
      />
      <div>
        <Table
          header={["決済日", "備考", "支出金額", "ジャンル", "カテゴリ"]}
          tbodyPropsArray={tbodyProps}
        />
      </div>
    </>
  );
};
