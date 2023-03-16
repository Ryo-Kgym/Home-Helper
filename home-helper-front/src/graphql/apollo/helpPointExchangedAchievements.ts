import { query } from "@graphql/apollo/apollo-client";
import { gql } from "@apollo/client";
import { useLoadUser } from "@hooks/useLoadUser";
import { HelpPointExchangedAchievement } from "@domain/model/home_helper/HelpPointExchangedAchievement";

export async function helpPointExchangedAchievements(): Promise<
  HelpPointExchangedAchievement[]
> {
  const param = {
    query: GET_HELP_POINT_EXCHANGED_ACHIEVEMENT,
    variables: {
      userId: useLoadUser().getUserId,
    },
    key: "helpPointExchangedAchievementByUserId",
  };

  return query(param);
}

const GET_HELP_POINT_EXCHANGED_ACHIEVEMENT = gql`
  query helpPointExchangedAchievementByUserId($userId: ID!) {
    helpPointExchangedAchievementByUserId(userId: $userId) {
      userId
      exchangeItemById {
        id
        name
        point
      }
      exchangeCount
      exchangeTotalPoint
      exchangedDatetime
    }
  }
`;
