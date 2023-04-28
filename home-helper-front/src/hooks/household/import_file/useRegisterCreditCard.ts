import { FileType } from "@provider/file/FileType";
import { RegistrationArgs } from "@hooks/household/import_file/useCreateImportFile";

/**
 * Package Private
 */
export const useRegisterCreditCard = ({
  createCreditCardSummaryMutation,
  createCreditCardDetailMutation,
  summaryId,
  fileType,
  accountId,
  withdrawalDate,
  loadData,
  userId,
  uuidList,
}: RegistrationArgs) => {
  const summaryVariableList = {
    id: summaryId,
    creditCard: CreditCardMap.get(fileType) || "other",
    accountId: accountId,
    totalAmount: loadData.reduce((acc, cur) => acc + cur.price, 0),
    count: loadData.length,
    withdrawalDate: withdrawalDate,
  };

  const detailVariableList = loadData.map((data, idx) => ({
    id: uuidList[idx],
    date: data.date,
    categoryId: data.categoryId!,
    amount: data.price,
    memo: data.note,
    summaryId: summaryId,
    userId: userId,
  }));

  return () => {
    createCreditCardSummaryMutation(summaryVariableList);
    setTimeout(() => {
      detailVariableList.map((variable) =>
        createCreditCardDetailMutation(variable)
      );
    }, 100);
  };
};

const CreditCardMap = new Map<FileType, string>([
  [FileType.AU_PAY_CSV, "AU_PAY_CARD"],
  [FileType.SMBC_CSV, "AMAZON_CARD"],
]);
