import { HelpPointEarnedAchievement } from "@domain/model/home_helper/HelpPointEarnedAchievement";
import { query } from "@graphql/apollo/apollo-client";
import { gql } from "@apollo/client";
import { useRecoilState } from "recoil";
import { userIdState } from "@recoil/userIdState";

export async function useHelpPointEarnedAchievements(): Promise<
  HelpPointEarnedAchievement[]
> {
  const [userId] = useRecoilState(userIdState);
  const param = {
    query: GET_HELP_POINT_EARNED_ACHIEVEMENT,
    variables: {
      userId,
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
