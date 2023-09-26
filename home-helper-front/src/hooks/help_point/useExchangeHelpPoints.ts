/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { useDate } from "@hooks/date/useDate";
import { useGroup } from "@hooks/group/useGroup";
import { useHelperKidHolder } from "@hooks/user/useHelperKidHolder";
import { useUuid } from "@hooks/uuid/useUuid";
import { ExchangeItem } from "domain/model/helper_kids/ExchangeItem";
import { useInsertExchangedAchievementMutation } from "graphql/hasura/generated/hasuraHelperKidsGraphql";

type Args = {
  exchangeItemMap: Map<string, ExchangeItem>;
};

export const useExchangeHelpPoints = ({ exchangeItemMap }: Args) => {
  const { groupId } = useGroup();
  const { helperKidId } = useHelperKidHolder();
  const { get } = useUuid();
  const { getNow } = useDate();

  const [, achievementMutation] = useInsertExchangedAchievementMutation();

  const _insertAchievement = async ({ id, point, count }: ExchangeItem) =>
    await achievementMutation({
      helpPointExchangedAchievementId: get(),
      helperKidId,
      exchangeItemId: id,
      exchangeTotalPoint: point * count,
      exchangeCount: count,
      exchangedDatetime: getNow(),
      groupId,
    });

  const exchangeHelpPoints = async () => {
    try {
      exchangeItemMap.forEach((exchangeItem) => {
        if (exchangeItem.count > 0) _insertAchievement(exchangeItem);
      });
    } catch (e) {
      console.error(e);
    }
  };

  return {
    exchangeHelpPoints,
  };
};