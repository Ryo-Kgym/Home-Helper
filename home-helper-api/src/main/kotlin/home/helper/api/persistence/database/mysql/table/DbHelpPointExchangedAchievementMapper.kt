/*
 * Auto-generated file. Created by MyBatis Generator
 */
package home.helper.api.persistence.database.mysql.table

import home.helper.api.persistence.database.mysql.table.DbHelpPointExchangedAchievementRecord
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
interface DbHelpPointExchangedAchievementMapper {
    @SelectProvider(type=SqlProviderAdapter::class, method="select")
    fun count(selectStatement: SelectStatementProvider): Long

    @DeleteProvider(type=SqlProviderAdapter::class, method="delete")
    fun delete(deleteStatement: DeleteStatementProvider): Int

    @InsertProvider(type=SqlProviderAdapter::class, method="insert")
    fun insert(insertStatement: InsertStatementProvider<DbHelpPointExchangedAchievementRecord>): Int

    @InsertProvider(type=SqlProviderAdapter::class, method="insertMultiple")
    fun insertMultiple(multipleInsertStatement: MultiRowInsertStatementProvider<DbHelpPointExchangedAchievementRecord>): Int

    @SelectProvider(type=SqlProviderAdapter::class, method="select")
    @ResultMap("DbHelpPointExchangedAchievementRecordResult")
    fun selectOne(selectStatement: SelectStatementProvider): DbHelpPointExchangedAchievementRecord?

    @SelectProvider(type=SqlProviderAdapter::class, method="select")
    @Results(id="DbHelpPointExchangedAchievementRecordResult", value = [
        Result(column="id", property="id", jdbcType=JdbcType.VARCHAR, id=true),
        Result(column="user_id", property="userId", jdbcType=JdbcType.VARCHAR),
        Result(column="exchange_item_id", property="exchangeItemId", jdbcType=JdbcType.VARCHAR),
        Result(column="exchange_count", property="exchangeCount", jdbcType=JdbcType.INTEGER),
        Result(column="exchange_total_point", property="exchangeTotalPoint", jdbcType=JdbcType.INTEGER),
        Result(column="exchanged_datetime", property="exchangedDatetime", jdbcType=JdbcType.TIMESTAMP)
    ])
    fun selectMany(selectStatement: SelectStatementProvider): List<DbHelpPointExchangedAchievementRecord>

    @UpdateProvider(type=SqlProviderAdapter::class, method="update")
    fun update(updateStatement: UpdateStatementProvider): Int
}