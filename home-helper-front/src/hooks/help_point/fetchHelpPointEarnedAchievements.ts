import { HelpPointEarnedAchievement } from "@domain/model/home_helper/HelpPointEarnedAchievement";
import { useHelpPointEarnedAchievements } from "@graphql/apollo/useHelpPointEarnedAchievements";

export async function fetchHelpPointEarnedAchievements(): Promise<
  HelpPointEarnedAchievement[]
> {
  return useHelpPointEarnedAchievements();
}
