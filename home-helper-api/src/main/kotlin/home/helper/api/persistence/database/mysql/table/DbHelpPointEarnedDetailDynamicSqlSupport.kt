/*
 * Auto-generated file. Created by MyBatis Generator
 */
package home.helper.api.persistence.database.mysql.table

import java.sql.JDBCType
import org.mybatis.dynamic.sql.SqlTable

object DbHelpPointEarnedDetailDynamicSqlSupport {
    object DbHelpPointEarnedDetail : SqlTable("help_point_earned_detail") {
        val id = column<String>("id", JDBCType.VARCHAR)

        val earnedAchievementId = column<String>("earned_achievement_id", JDBCType.VARCHAR)

        val helpItemId = column<String>("help_item_id", JDBCType.VARCHAR)
    }
}