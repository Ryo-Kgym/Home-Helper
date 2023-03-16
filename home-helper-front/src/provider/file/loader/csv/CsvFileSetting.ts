import { FileType } from "@provider/file/FileType";
import Encoding from "encoding-japanese";

const CsvFileSettingMap = new Map<FileType, CsvFileSetting>([
  [
    FileType.SMBC_CSV,
    {
      encodingTo: "UNICODE",
      encodingFrom: "SJIS",
      encodingType: "array",
      splitSeparator: "\r\n",
      headerRows: 1,
      footerRows: 4,
    },
  ],
]);

type CsvFileSetting = {
  encodingTo: Encoding.Encoding;
  encodingFrom: Encoding.Encoding;
  encodingType: any;
  splitSeparator: string;
  headerRows?: number;
  footerRows?: number;
};

export const getSetting = (fileType: FileType): CsvFileSetting => {
  return CsvFileSettingMap.get(fileType)!;
};
