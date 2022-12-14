/*
 * Auto-generated file. Created by MyBatis Generator
 */
package home.helper.api.persistence.database.mysql.table

import java.sql.JDBCType
import org.mybatis.dynamic.sql.SqlTable

object DbHelpPointConsumedDetailDynamicSqlSupport {
    object DbHelpPointConsumedDetail : SqlTable("help_point_consumed_detail") {
        val id = column<String>("id", JDBCType.VARCHAR)

        val consumedAchievementId = column<String>("consumed_achievement_id", JDBCType.VARCHAR)

        val helpItemId = column<String>("help_item_id", JDBCType.VARCHAR)
    }
}