/*
 * Auto-generated file. Created by MyBatis Generator
 */
package home.helper.api.persistence.database.mysql.table

import org.apache.ibatis.annotations.DeleteProvider
import org.apache.ibatis.annotations.InsertProvider
import org.apache.ibatis.annotations.Mapper
import org.apache.ibatis.annotations.Result
import org.apache.ibatis.annotations.ResultMap
import org.apache.ibatis.annotations.Results
import org.apache.ibatis.annotations.SelectProvider
import org.apache.ibatis.annotations.UpdateProvider
import org.apache.ibatis.type.JdbcType
import org.mybatis.dynamic.sql.delete.render.DeleteStatementProvider
import org.mybatis.dynamic.sql.insert.render.InsertStatementProvider
import org.mybatis.dynamic.sql.insert.render.MultiRowInsertStatementProvider
import org.mybatis.dynamic.sql.select.render.SelectStatementProvider
import org.mybatis.dynamic.sql.update.render.UpdateStatementProvider
import org.mybatis.dynamic.sql.util.SqlProviderAdapter

@Mapper
interface DbHelpPointEarnedDetailMapper {
    @SelectProvider(type = SqlProviderAdapter::class, method = "select")
    fun count(selectStatement: SelectStatementProvider): Long

    @DeleteProvider(type = SqlProviderAdapter::class, method = "delete")
    fun delete(deleteStatement: DeleteStatementProvider): Int

    @InsertProvider(type = SqlProviderAdapter::class, method = "insert")
    fun insert(insertStatement: InsertStatementProvider<DbHelpPointEarnedDetailRecord>): Int

    @InsertProvider(type = SqlProviderAdapter::class, method = "insertMultiple")
    fun insertMultiple(multipleInsertStatement: MultiRowInsertStatementProvider<DbHelpPointEarnedDetailRecord>): Int

    @SelectProvider(type = SqlProviderAdapter::class, method = "select")
    @ResultMap("DbHelpPointEarnedDetailRecordResult")
    fun selectOne(selectStatement: SelectStatementProvider): DbHelpPointEarnedDetailRecord?

    @SelectProvider(type = SqlProviderAdapter::class, method = "select")
    @Results(
        id = "DbHelpPointEarnedDetailRecordResult", value = [
            Result(column = "id", property = "id", jdbcType = JdbcType.BIGINT, id = true),
            Result(column = "achievement_id", property = "achievementId", jdbcType = JdbcType.BIGINT),
            Result(column = "item_id", property = "itemId", jdbcType = JdbcType.BIGINT)
        ]
    )
    fun selectMany(selectStatement: SelectStatementProvider): List<DbHelpPointEarnedDetailRecord>

    @UpdateProvider(type = SqlProviderAdapter::class, method = "update")
    fun update(updateStatement: UpdateStatementProvider): Int
}