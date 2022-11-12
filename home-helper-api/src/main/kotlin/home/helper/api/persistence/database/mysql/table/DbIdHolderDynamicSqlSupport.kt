/*
 * Auto-generated file. Created by MyBatis Generator
 */
package home.helper.api.persistence.database.mysql.table

import home.helper.api.persistence.database.mysql.id.IdType
import org.mybatis.dynamic.sql.SqlTable
import java.sql.JDBCType

object DbIdHolderDynamicSqlSupport {
    object DbIdHolder : SqlTable("id_holder") {
        val idType = column<IdType>("id_type", JDBCType.CHAR)

        val currentId = column<Long>("current_id", JDBCType.BIGINT)
    }
}