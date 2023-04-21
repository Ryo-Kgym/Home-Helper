import { useUpdateDailyDetailByIdMutation } from "@graphql/postgraphile/generated/graphql";

type useUpdateDailyDetailBySerialNoArgs = {
  id: string;
  date: Date;
  categoryId: string;
  accountId: string;
  amount: number;
  memo: string | null;
};
export const useUpdateDailyDetailBySerialNo = ({
  id,
  date,
  categoryId,
  accountId,
  amount,
  memo,
}: useUpdateDailyDetailBySerialNoArgs) => {
  const [ignore, updateMutation] = useUpdateDailyDetailByIdMutation();

  const updateHandler = () => {
    updateMutation({
      id,
      date,
      categoryId,
      accountId,
      amount,
      memo,
    });
  };

  return {
    updateHandler,
  };
};
