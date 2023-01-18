import { HelpPointEarnedAchievement } from "@domain/model/home_helper/HelpPointEarnedAchievement";
import { helpPointEarnedAchievements } from "@graphql/apollo/helpPointEarnedAchievements";

export async function fetchHelpPointEarnedAchievements(): Promise<
  HelpPointEarnedAchievement[]
> {
  return helpPointEarnedAchievements();
}
