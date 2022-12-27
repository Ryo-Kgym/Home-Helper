/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.persistence.database.mysql.id

import home.helper.core.domain.model.ValueObjectId

@ValueObjectId
data class HelpPointEarnedAchievementId private constructor(
    val id: String,
) {
    companion object {
        fun valueOf(id: String) = HelpPointEarnedAchievementId(id)
    }
}
