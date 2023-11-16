/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { useCreateDailyDetailMutation } from "@graphql/hasura/generated/hasuraGraphql";
import { LoadFileProps } from "@components/organisms/file_import/loadUploadFile";
import { useUuid } from "@hooks/uuid/useUuid";
import { useGroup } from "@hooks/group/useGroup";
import { useUser } from "@hooks/user/useUser";

/**
 * Package Private
 */
export const useRegisterDailyDetails = ({
  accountId,
  loadData,
}: {
  accountId: string;
  loadData: LoadFileProps[];
}) => {
  const { get } = useUuid();
  const { userId } = useUser();
  const { groupId } = useGroup();

  const [, createDailyDetailMutation] = useCreateDailyDetailMutation();

  const createDailyDetailVariableList = loadData.map((data, idx) => ({
    id: get(),
    date: data.date,
    genreId: data.genreId!,
    iocomeType: data.iocomeType!,
    categoryId: data.categoryId!,
    accountId: accountId,
    amount: data.price,
    memo: data.note,
    userId,
    groupId,
  }));

  const registerDailyDetails = async () => {
    try {
      createDailyDetailVariableList.map(
        async (variable) => await createDailyDetailMutation(variable),
      );
    } catch (e) {
      console.error(e);
    }
  };

  return { registerDailyDetails };
};
