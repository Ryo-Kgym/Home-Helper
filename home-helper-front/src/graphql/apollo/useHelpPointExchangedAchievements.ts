import { query } from "@graphql/apollo/apollo-client";
import { gql } from "@apollo/client";
import { HelpPointExchangedAchievement } from "@domain/model/home_helper/HelpPointExchangedAchievement";
import { useUser } from "@hooks/user/useUser";

export async function useHelpPointExchangedAchievements(): Promise<
  HelpPointExchangedAchievement[]
> {
  const { userId } = useUser();

  const param = {
    query: GET_HELP_POINT_EXCHANGED_ACHIEVEMENT,
    variables: {
      userId,
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
