/*
 * Auto-generated file. Created by MyBatis Generator
 */
package home.helper.api.persistence.database.mysql.table

import java.time.LocalDateTime

data class DbHelpPointExchangedAchievementRecord(
    var id: String? = null,
    var userId: String? = null,
    var exchangeItemId: String? = null,
    var exchangeCount: Int? = null,
    var exchangeTotalPoint: Int? = null,
    var exchangedDatetime: LocalDateTime? = null
)