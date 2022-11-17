/*
 * Auto-generated file. Created by MyBatis Generator
 */
package home.helper.api.persistence.database.mysql.table

import org.mybatis.dynamic.sql.SqlTable
import java.sql.JDBCType

object DbHelpPointEarnedDetailDynamicSqlSupport {
    object DbHelpPointEarnedDetail : SqlTable("help_point_earned_detail") {
        val id = column<Long>("id", JDBCType.BIGINT)

        val achievementId = column<Long>("achievement_id", JDBCType.BIGINT)

        val itemId = column<Long>("item_id", JDBCType.BIGINT)
    }
}