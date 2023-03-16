import { FileType } from "@provider/file/FileType";
import {
  parseSmbcCsvLine,
  SmbcCsvLine,
} from "@provider/file/loader/csv/SmbcCsvLine";

const CsvFileParseMap = new Map<FileType, (line: string) => any>([
  [FileType.SMBC_CSV, parseSmbcCsvLine],
]);

/**
 * CSVの行をパースする
 * @param line
 * @param fileType
 */
export const parseCsv = (line: string, fileType: FileType): SmbcCsvLine => {
  return CsvFileParseMap.get(fileType)!(line);
};
