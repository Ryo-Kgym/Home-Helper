import { FileType } from "@provider/file/FileType";
import { loadCsvFile } from "@provider/file/loader/csv/loadCsvFile";
import { SmbcCsvLine } from "@provider/file/loader/csv/SmbcCsvLine";
import { AuPayCsvLine } from "@provider/file/loader/csv/AuPayCsvLine";
import { OitaBankCsvLine } from "@provider/file/loader/csv/OitaBankCsvLine";

type loadUploadFileArgs = {
  uploadFile: File;
  fileType: FileType;
};
export const loadUploadFile = async ({
  uploadFile,
  fileType,
}: loadUploadFileArgs) => {
  const res = await loadCsvFile({
    file: uploadFile,
    fileType: fileType,
  });

  return res.map((r) => RefillMap.get(fileType)!(r));
};

export type LoadFileProps = {
  date: Date;
  note: string;
  price: number;
  genreId: string | null;
  genreName: string | null;
  categoryId: string | null;
  categoryName: string | null;
};

const RefillMap = new Map<FileType, (x: any) => LoadFileProps>([
  [
    FileType.SMBC_CSV,
    (line: SmbcCsvLine): LoadFileProps => ({
      date: line.date(),
      note: line.note() + " at " + line.shopName(),
      price: line.price(),
      genreId: null,
      genreName: null,
      categoryId: null,
      categoryName: null,
    }),
  ],
  [
    FileType.AU_PAY_CSV,
    (line: AuPayCsvLine): LoadFileProps => ({
      date: line.date(),
      note: line.note() + " at " + line.shopName(),
      price: line.price(),
      genreId: null,
      genreName: null,
      categoryId: null,
      categoryName: null,
    }),
  ],
  [
    FileType.OITA_BANK_CSV,
    (line: OitaBankCsvLine): LoadFileProps => ({
      date: line.date(),
      note: line.transactionType() + " " + line.note(),
      price: line.paymentPrice() ?? line.depositPrice() ?? 0,
      genreId: null,
      genreName: null,
      categoryId: null,
      categoryName: null,
    }),
  ],
]);
