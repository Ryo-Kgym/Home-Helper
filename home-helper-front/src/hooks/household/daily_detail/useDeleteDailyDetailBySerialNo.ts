import { useDeleteDailyDetailBySerialNoMutation } from "@graphql/postgraphile/generated/graphql";

type useDeleteDailyDetailBySerialNoArgs = {
  id: string;
};
export const useDeleteDailyDetailBySerialNo = ({
  id,
}: useDeleteDailyDetailBySerialNoArgs) => {
  const [ignore, deleteMutation] = useDeleteDailyDetailBySerialNoMutation();

  const deleteHandler = () => {
    deleteMutation({
      id: id,
    });
  };

  return {
    deleteHandler,
  };
};
