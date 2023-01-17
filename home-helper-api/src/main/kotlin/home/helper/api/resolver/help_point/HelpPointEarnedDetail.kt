/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.api.resolver.help_point

data class HelpPointEarnedDetail(
    val earnedAchievementId: String,
    val helpItemId: String,
    val helpItemCount: Int,
    val helpItemTotalPoint: Int,
)
