/*
 * Auto-generated file. Created by MyBatis Generator
 */
package home.helper.api.persistence.database.mysql.table

import java.sql.JDBCType
import org.mybatis.dynamic.sql.SqlTable

object DbMHelpItemDynamicSqlSupport {
    object DbMHelpItem : SqlTable("m_help_item") {
        val id = column<String>("id", JDBCType.VARCHAR)

        val name = column<String>("name", JDBCType.VARCHAR)

        val point = column<Int>("point", JDBCType.INTEGER)

        val memo = column<String>("memo", JDBCType.VARCHAR)
    }
}