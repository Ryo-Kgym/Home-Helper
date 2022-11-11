/*
 * Auto-generated file. Created by MyBatis Generator
 */
package home.helper.api.persistence.database.mysql.table

import org.mybatis.dynamic.sql.SqlTable
import java.sql.JDBCType
import java.time.LocalDate

object DbHelpPointEarnedAchievementDynamicSqlSupport {
    object DbHelpPointEarnedAchievement : SqlTable("help_point_earned_achievement") {
        val id = column<Long>("id", JDBCType.BIGINT)

        val userId = column<Int>("user_id", JDBCType.INTEGER)

        val earnedDate = column<LocalDate>("earned_date", JDBCType.DATE)

        val earnedPoint = column<Int>("earned_point", JDBCType.INTEGER)
    }
}