/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.resolver.help_point

import home.helper.api.resolver.help_item.HelpItem
import java.time.LocalDate

data class HelpPointEarnedAchievement(
    val id: Long,
    val userId: Long,
    val earnedDate: LocalDate,
    val earnedPoint: Long,
    val helpItems: List<HelpItem>,
)