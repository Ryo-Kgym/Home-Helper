import { FileImportPresenter } from "@components/organisms/file_import/FileImportPresenter";
import { TbodyProps } from "@components/atoms/Table";
import category from "@pages/household/category";

export const FileImportContainer = () => {
  const tableProps: TbodyProps[] = mockImported.map((d) => {
    return {
      keyPrefix: "category",
      columns: [
        { value: d.date, align: "center" },
        { value: d.note, align: "left" },
        { value: d.price.toLocaleString(), align: "right" },
        { value: "", align: "left" },
        { value: "", align: "left" },
      ],
    };
  });

  return (
    <FileImportPresenter tbodyProps={tableProps} yearMonths={mockYearMonth} />
  );
};

const mockYearMonth = [
  { yearMonth: "2023-01" },
  { yearMonth: "2023-02" },
  { yearMonth: "2023-03" },
  { yearMonth: "2023-04" },
];

const mockImported = [
  { date: "2023-02-01", note: "Amazon Payで", price: 12000 },
  { date: "2023-02-05", note: "入金", price: -2000 },
  { date: "2023-02-20", note: "Amazon Payで", price: 1000 },
];
