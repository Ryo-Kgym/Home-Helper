/*
 * Auto-generated file. Created by MyBatis Generator
 */
package home.helper.api.persistence.database.mysql.table

import java.sql.JDBCType
import java.time.LocalDateTime
import org.mybatis.dynamic.sql.SqlTable

object DbHelpPointExchangedAchievementDynamicSqlSupport {
    object DbHelpPointExchangedAchievement : SqlTable("help_point_exchanged_achievement") {
        val id = column<String>("id", JDBCType.VARCHAR)

        val userId = column<String>("user_id", JDBCType.VARCHAR)

        val exchangeItemId = column<String>("exchange_item_id", JDBCType.VARCHAR)

        val exchangeCount = column<Int>("exchange_count", JDBCType.INTEGER)

        val exchangeTotalPoint = column<Int>("exchange_total_point", JDBCType.INTEGER)

        val exchangedDatetime = column<LocalDateTime>("exchanged_datetime", JDBCType.TIMESTAMP)
    }
}