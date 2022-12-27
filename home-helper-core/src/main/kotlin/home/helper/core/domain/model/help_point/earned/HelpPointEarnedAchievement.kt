/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.domain.model.help_point.earned

import java.time.LocalDate
import home.helper.core.domain.model.help_point.HelpPoint
import home.helper.core.domain.model.user.UserId

data class HelpPointEarnedAchievement(
    val achievementId: HelpPointEarnedAchievementId,
    val userId: UserId,
    val earnedDate: LocalDate,
    val earnedPoint: HelpPoint,
)
