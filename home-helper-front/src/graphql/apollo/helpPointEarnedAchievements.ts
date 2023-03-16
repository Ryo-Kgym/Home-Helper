import { HelpPointEarnedAchievement } from "@domain/model/home_helper/HelpPointEarnedAchievement";
import { query } from "@graphql/apollo/apollo-client";
import { gql } from "@apollo/client";
import { useLoadUser } from "@hooks/useLoadUser";

export async function helpPointEarnedAchievements(): Promise<
  HelpPointEarnedAchievement[]
> {
  const param = {
    query: GET_HELP_POINT_EARNED_ACHIEVEMENT,
    variables: {
      userId: useLoadUser().getUserId,
    },
    key: "helpPointEarnedAchievement",
  };

  return query(param);
}

const GET_HELP_POINT_EARNED_ACHIEVEMENT = gql`
  query helpPointEarnedAchievement($userId: ID!) {
    helpPointEarnedAchievement(param: { userId: $userId }) {
      id
      userId
      earnedDate
      earnedPoint
      helpPointEarnedDetailByEarnedAchievementId {
        helpItemByEarnedDetail {
          id
          name
          point
          memo
        }
        helpItemCount
        helpItemTotalPoint
      }
    }
  }
`;
