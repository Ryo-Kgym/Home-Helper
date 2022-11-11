/*
 * Auto-generated file. Created by MyBatis Generator
 */
package home.helper.api.persistence.database.mysql.table

import org.mybatis.dynamic.sql.SqlTable
import java.sql.JDBCType

object DbHelpPointEarnedDetailDynamicSqlSupport {
    object DbHelpPointEarnedDetail : SqlTable("help_point_earned_detail") {
        val id = column<Long>("id", JDBCType.BIGINT)

        val achievementId = column<Int>("achievement_id", JDBCType.INTEGER)

        val itemId = column<Int>("item_id", JDBCType.INTEGER)
    }
}