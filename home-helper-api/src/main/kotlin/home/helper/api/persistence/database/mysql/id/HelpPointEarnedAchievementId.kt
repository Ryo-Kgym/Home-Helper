/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.persistence.database.mysql.id

import home.helper.core.domain.model.ValueObjectId

@ValueObjectId
data class HelpPointEarnedAchievementId(
    val id: String,
)
