/*
 * Auto-generated file. Created by MyBatis Generator
 */
package home.helper.api.persistence.database.mysql.table

import java.sql.JDBCType
import java.time.LocalDateTime
import org.mybatis.dynamic.sql.SqlTable

object DbHelpPointConsumedAchievementDynamicSqlSupport {
    object DbHelpPointConsumedAchievement : SqlTable("help_point_consumed_achievement") {
        val id = column<String>("id", JDBCType.VARCHAR)

        val userId = column<String>("user_id", JDBCType.VARCHAR)

        val consumedDatetime = column<LocalDateTime>("consumed_datetime", JDBCType.TIMESTAMP)

        val consumedPoint = column<Int>("consumed_point", JDBCType.INTEGER)
    }
}