import { useDeleteDailyDetailBySerialNoMutation } from "@graphql/postgraphile/generated/graphql";

type useDeleteDailyDetailBySerialNoArgs = {
  serialNo: number;
};
export const useDeleteDailyDetailBySerialNo = ({
  serialNo,
}: useDeleteDailyDetailBySerialNoArgs) => {
  const [ignore, deleteMutation] = useDeleteDailyDetailBySerialNoMutation();

  const deleteHandler = () => {
    deleteMutation({
      serialNo: serialNo,
    });
  };

  return {
    deleteHandler,
  };
};
