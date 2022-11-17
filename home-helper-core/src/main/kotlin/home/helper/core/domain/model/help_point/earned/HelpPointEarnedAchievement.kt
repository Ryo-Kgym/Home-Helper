/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.domain.model.help_point.earned

import home.helper.core.domain.model.help_item.HelpItem
import home.helper.core.domain.model.help_point.HelpPoint
import home.helper.core.domain.model.user.UserId
import java.time.LocalDate

data class HelpPointEarnedAchievement(
    val achievementId: HelpPointEarnedAchievementId,
    val userId: UserId,
    val earnedDate: LocalDate,
    val earnedPoint: HelpPoint,
    val helpItemList: List<HelpItem>,
)
