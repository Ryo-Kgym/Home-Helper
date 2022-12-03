/*
 * Auto-generated file. Created by MyBatis Generator
 */
package home.helper.api.persistence.database.mysql.table

import java.sql.JDBCType
import org.mybatis.dynamic.sql.SqlTable

object DbMUserDynamicSqlSupport {
    object DbMUser : SqlTable("m_user") {
        val id = column<String>("id", JDBCType.VARCHAR)

        val name = column<String>("name", JDBCType.VARCHAR)

        val nameSuffix = column<String>("name_suffix", JDBCType.VARCHAR)
    }
}