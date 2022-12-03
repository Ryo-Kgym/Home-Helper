/*
 * Auto-generated file. Created by MyBatis Generator
 */
package home.helper.api.persistence.database.mysql.table

import java.sql.JDBCType
import java.time.LocalDate
import org.mybatis.dynamic.sql.SqlTable

object DbHelpPointEarnedAchievementDynamicSqlSupport {
    object DbHelpPointEarnedAchievement : SqlTable("help_point_earned_achievement") {
        val id = column<Long>("id", JDBCType.BIGINT)

        val userId = column<String>("user_id", JDBCType.VARCHAR)

        val earnedDate = column<LocalDate>("earned_date", JDBCType.DATE)

        val earnedPoint = column<Long>("earned_point", JDBCType.BIGINT)
    }
}