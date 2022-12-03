/*
 * Auto-generated file. Created by MyBatis Generator
 */
package home.helper.api.persistence.database.mysql.table

import java.sql.JDBCType
import org.mybatis.dynamic.sql.SqlTable

object DbMExchangeItemDynamicSqlSupport {
    object DbMExchangeItem : SqlTable("m_exchange_item") {
        val id = column<String>("id", JDBCType.VARCHAR)

        val itemName = column<String>("item_name", JDBCType.VARCHAR)

        val exchangePoint = column<Int>("exchange_point", JDBCType.INTEGER)
    }
}