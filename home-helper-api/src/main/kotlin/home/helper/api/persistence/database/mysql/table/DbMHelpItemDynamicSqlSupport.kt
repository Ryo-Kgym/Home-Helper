/*
 * Auto-generated file. Created by MyBatis Generator
 */
package home.helper.api.persistence.database.mysql.table

import java.sql.JDBCType
import org.mybatis.dynamic.sql.SqlTable

object DbMHelpItemDynamicSqlSupport {
    object DbMHelpItem : SqlTable("m_help_item") {
        val id = column<String>("id", JDBCType.VARCHAR)

        val itemName = column<String>("item_name", JDBCType.VARCHAR)

        val helpPoint = column<Int>("help_point", JDBCType.INTEGER)

        val memo = column<String>("memo", JDBCType.VARCHAR)
    }
}