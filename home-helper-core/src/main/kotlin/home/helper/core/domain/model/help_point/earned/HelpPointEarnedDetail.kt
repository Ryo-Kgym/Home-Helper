/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.domain.model.help_point.earned

import home.helper.core.domain.model.help_item.HelpItemId
import home.helper.core.domain.model.help_point.HelpPoint

data class HelpPointEarnedDetail(
    val earnedAchievementId: HelpPointEarnedAchievementId,
    val helpItemId: HelpItemId,
    val helpItemCount: Int,
    val helpItemTotalPoint: HelpPoint,
)
