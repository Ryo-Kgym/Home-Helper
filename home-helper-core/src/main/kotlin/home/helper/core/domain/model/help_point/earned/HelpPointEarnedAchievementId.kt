/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.domain.model.help_point.earned

data class HelpPointEarnedAchievementId private constructor(
    val id: String,
) {
    companion object {
        fun valueOf(id: String) = HelpPointEarnedAchievementId(id)
    }
}
