/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.resolver.help_point

import java.time.LocalDate

data class HelpPointEarnedAchievement(
    val id: String,
    val userId: String,
    val earnedDate: LocalDate,
    val earnedPoint: Int,
)