import { useUpdateDailyDetailBySerialNoMutation } from "@graphql/postgraphile/generated/graphql";

type useUpdateDailyDetailBySerialNoArgs = {
  serialNo: number;
  date: Date;
  categoryId: string;
  accountId: string;
  amount: number;
  memo: string | null;
};
export const useUpdateDailyDetailBySerialNo = ({
  serialNo,
  date,
  categoryId,
  accountId,
  amount,
  memo,
}: useUpdateDailyDetailBySerialNoArgs) => {
  const [ignore, updateMutation] = useUpdateDailyDetailBySerialNoMutation();

  const updateHandler = () => {
    updateMutation({
      serialNo: serialNo,
      date: date,
      categoryId: categoryId,
      accountId: accountId,
      amount: amount,
      memo: memo,
    });
  };

  return {
    updateHandler,
  };
};
