/*
 * Auto-generated file. Created by MyBatis Generator
 */
package home.helper.api.persistence.database.mysql.table

import java.sql.JDBCType
import org.mybatis.dynamic.sql.SqlTable

object DbHelpPointEarnedDetailDynamicSqlSupport {
    object DbHelpPointEarnedDetail : SqlTable("help_point_earned_detail") {
        val id = column<String>("id", JDBCType.VARCHAR)

        val achievementId = column<String>("achievement_id", JDBCType.VARCHAR)

        val itemId = column<String>("item_id", JDBCType.VARCHAR)
    }
}