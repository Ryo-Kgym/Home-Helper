/*
 * Auto-generated file. Created by MyBatis Generator
 */
package home.helper.api.persistence.database.mysql.table

import org.mybatis.dynamic.sql.SqlTable
import java.sql.JDBCType

object DbMHelpItemDynamicSqlSupport {
    object DbMHelpItem : SqlTable("m_help_item") {
        val id = column<Long>("id", JDBCType.BIGINT)

        val itemName = column<String>("item_name", JDBCType.VARCHAR)

        val helpPoint = column<Long>("help_point", JDBCType.BIGINT)

        val memo = column<String>("memo", JDBCType.VARCHAR)
    }
}