import { HelpPointExchangedAchievement } from "@domain/model/home_helper/HelpPointExchangedAchievement";
import { useHelpPointExchangedAchievements } from "@graphql/apollo/useHelpPointExchangedAchievements";

export async function fetchHelpPointExchangedAchievements(): Promise<
  HelpPointExchangedAchievement[]
> {
  return useHelpPointExchangedAchievements();
}
