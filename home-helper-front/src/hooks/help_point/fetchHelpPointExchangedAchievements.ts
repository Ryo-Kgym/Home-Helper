import { HelpPointExchangedAchievement } from "@domain/model/home_helper/HelpPointExchangedAchievement";
import { helpPointExchangedAchievements } from "@graphql/apollo/helpPointExchangedAchievements";

export async function fetchHelpPointExchangedAchievements(): Promise<
  HelpPointExchangedAchievement[]
> {
  return helpPointExchangedAchievements();
}
