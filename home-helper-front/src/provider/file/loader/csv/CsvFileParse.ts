import { FileType } from "@provider/file/FileType";
import { parseSmbcCsvLine } from "@provider/file/loader/csv/SmbcCsvLine";
import { parseAuPayCsvLine } from "@provider/file/loader/csv/AuPayCsvLine";

const CsvFileParseMap = new Map<FileType, (line: string) => any>([
  [FileType.SMBC_CSV, parseSmbcCsvLine],
  [FileType.AU_CSV, parseAuPayCsvLine],
]);

/**
 * CSVの行をパースする
 * @param line
 * @param fileType
 */
export const parseCsv = (line: string, fileType: FileType): any => {
  return CsvFileParseMap.get(fileType)!(line);
};
