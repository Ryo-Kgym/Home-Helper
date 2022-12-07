/*
 * Auto-generated file. Created by MyBatis Generator
 */
package home.helper.api.persistence.database.mysql.table

import java.sql.JDBCType
import java.time.LocalDateTime
import org.mybatis.dynamic.sql.SqlTable

object DbUserPointDynamicSqlSupport {
    object DbUserPoint : SqlTable("user_point") {
        val userId = column<String>("user_id", JDBCType.VARCHAR)

        val point = column<Int>("point", JDBCType.INTEGER)

        val lastHelpDatetime = column<LocalDateTime>("last_help_datetime", JDBCType.TIMESTAMP)
    }
}