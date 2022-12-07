/*
 * Auto-generated file. Created by MyBatis Generator
 */
package home.helper.api.persistence.database.mysql.table

import java.sql.JDBCType
import java.time.LocalDateTime
import org.mybatis.dynamic.sql.SqlTable

object DbHelpPointEarnedAchievementDynamicSqlSupport {
    object DbHelpPointEarnedAchievement : SqlTable("help_point_earned_achievement") {
        val id = column<String>("id", JDBCType.VARCHAR)

        val userId = column<String>("user_id", JDBCType.VARCHAR)

        val earnedDatetime = column<LocalDateTime>("earned_datetime", JDBCType.TIMESTAMP)

        val earnedPoint = column<Int>("earned_point", JDBCType.INTEGER)
    }
}