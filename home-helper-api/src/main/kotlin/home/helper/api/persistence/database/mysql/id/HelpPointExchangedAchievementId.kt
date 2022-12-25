/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.persistence.database.mysql.id

data class HelpPointExchangedAchievementId

private constructor(
    val id: String
) {
    companion object {
        fun valueOf(id: String): HelpPointExchangedAchievementId {
            return HelpPointExchangedAchievementId(id)
        }
    }
}
