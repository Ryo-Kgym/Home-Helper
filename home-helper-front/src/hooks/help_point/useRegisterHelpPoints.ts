/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { HelpItem } from "@domain/model/helper_kids/HelpItem";
import { useDate } from "@hooks/date/useDate";
import { useGroup } from "@hooks/group/useGroup";
import { useHelperKidHolder } from "@hooks/user/useHelperKidHolder";
import { useUuid } from "@hooks/uuid/useUuid";
import {
  useRegisterHelpPointEarnedAchievementMutation,
  useRegisterHelpPointEarnedDetailMutation,
} from "graphql/hasura/generated/hasuraHelperKidsGraphql";

type Args = {
  helpItemMap: Map<string, HelpItem>;
  totalPoint: number;
};

export const useRegisterHelpPoints = ({ helpItemMap, totalPoint }: Args) => {
  const { groupId } = useGroup();
  const { helperKidId } = useHelperKidHolder();
  const { get } = useUuid();
  const helpPointEarnedAchievementId = get();
  const { getNow } = useDate();

  const [, detailMutation] = useRegisterHelpPointEarnedDetailMutation();
  const [, achievementMutation] =
    useRegisterHelpPointEarnedAchievementMutation();

  const _registerAchievement = async () =>
    await achievementMutation({
      helpPointEarnedAchievementId,
      helperKidId,
      groupId,
      earnedPoint: totalPoint,
      earnedDatetime: getNow(),
    });

  const _registerDetail = async ({ id, point, count }: HelpItem) =>
    await detailMutation({
      helpPointEarnedDetailId: get(),
      earnedAchievementId: helpPointEarnedAchievementId,
      helpItemId: id,
      helpItemTotalPoint: point,
      helpItemCount: count,
      groupId,
    });

  const registerHelpPoints = async () => {
    try {
      await _registerAchievement();
      helpItemMap.forEach((helpItem) => {
        if (helpItem.count > 0) _registerDetail(helpItem);
      });
    } catch (e) {
      console.error(e);
    }
  };

  return {
    registerHelpPoints,
  };
};
