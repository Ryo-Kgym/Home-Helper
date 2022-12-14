/*
 * Auto-generated file. Created by MyBatis Generator
 */
@file:Suppress("DEPRECATION")

package home.helper.api.persistence.database.mysql.table

import org.mybatis.dynamic.sql.SqlBuilder.isEqualTo
import org.mybatis.dynamic.sql.util.kotlin.CountCompleter
import org.mybatis.dynamic.sql.util.kotlin.DeleteCompleter
import org.mybatis.dynamic.sql.util.kotlin.KotlinUpdateBuilder
import org.mybatis.dynamic.sql.util.kotlin.SelectCompleter
import org.mybatis.dynamic.sql.util.kotlin.UpdateCompleter
import org.mybatis.dynamic.sql.util.kotlin.mybatis3.countFrom
import org.mybatis.dynamic.sql.util.kotlin.mybatis3.deleteFrom
import org.mybatis.dynamic.sql.util.kotlin.mybatis3.insert
import org.mybatis.dynamic.sql.util.kotlin.mybatis3.insertMultiple
import org.mybatis.dynamic.sql.util.kotlin.mybatis3.selectDistinct
import org.mybatis.dynamic.sql.util.kotlin.mybatis3.selectList
import org.mybatis.dynamic.sql.util.kotlin.mybatis3.selectOne
import org.mybatis.dynamic.sql.util.kotlin.mybatis3.update
import home.helper.api.persistence.database.mysql.table.DbHelpPointConsumedDetailDynamicSqlSupport.DbHelpPointConsumedDetail
import home.helper.api.persistence.database.mysql.table.DbHelpPointConsumedDetailDynamicSqlSupport.DbHelpPointConsumedDetail.consumedAchievementId
import home.helper.api.persistence.database.mysql.table.DbHelpPointConsumedDetailDynamicSqlSupport.DbHelpPointConsumedDetail.helpItemId
import home.helper.api.persistence.database.mysql.table.DbHelpPointConsumedDetailDynamicSqlSupport.DbHelpPointConsumedDetail.id

fun DbHelpPointConsumedDetailMapper.count(completer: CountCompleter) =
    countFrom(this::count, DbHelpPointConsumedDetail, completer)

fun DbHelpPointConsumedDetailMapper.delete(completer: DeleteCompleter) =
    deleteFrom(this::delete, DbHelpPointConsumedDetail, completer)

fun DbHelpPointConsumedDetailMapper.deleteByPrimaryKey(id_: String) =
    delete {
        where(id, isEqualTo(id_))
    }

fun DbHelpPointConsumedDetailMapper.insert(record: DbHelpPointConsumedDetailRecord) =
    insert(this::insert, record, DbHelpPointConsumedDetail) {
        map(id).toProperty("id")
        map(consumedAchievementId).toProperty("consumedAchievementId")
        map(helpItemId).toProperty("helpItemId")
    }

fun DbHelpPointConsumedDetailMapper.insertMultiple(records: Collection<DbHelpPointConsumedDetailRecord>) =
    insertMultiple(this::insertMultiple, records, DbHelpPointConsumedDetail) {
        map(id).toProperty("id")
        map(consumedAchievementId).toProperty("consumedAchievementId")
        map(helpItemId).toProperty("helpItemId")
    }

fun DbHelpPointConsumedDetailMapper.insertMultiple(vararg records: DbHelpPointConsumedDetailRecord) =
    insertMultiple(records.toList())

fun DbHelpPointConsumedDetailMapper.insertSelective(record: DbHelpPointConsumedDetailRecord) =
    insert(this::insert, record, DbHelpPointConsumedDetail) {
        map(id).toPropertyWhenPresent("id", record::id)
        map(consumedAchievementId).toPropertyWhenPresent("consumedAchievementId", record::consumedAchievementId)
        map(helpItemId).toPropertyWhenPresent("helpItemId", record::helpItemId)
    }

private val columnList = listOf(id, consumedAchievementId, helpItemId)

fun DbHelpPointConsumedDetailMapper.selectOne(completer: SelectCompleter) =
    selectOne(this::selectOne, columnList, DbHelpPointConsumedDetail, completer)

fun DbHelpPointConsumedDetailMapper.select(completer: SelectCompleter) =
    selectList(this::selectMany, columnList, DbHelpPointConsumedDetail, completer)

fun DbHelpPointConsumedDetailMapper.selectDistinct(completer: SelectCompleter) =
    selectDistinct(this::selectMany, columnList, DbHelpPointConsumedDetail, completer)

fun DbHelpPointConsumedDetailMapper.selectByPrimaryKey(id_: String) =
    selectOne {
        where(id, isEqualTo(id_))
    }

fun DbHelpPointConsumedDetailMapper.update(completer: UpdateCompleter) =
    update(this::update, DbHelpPointConsumedDetail, completer)

fun KotlinUpdateBuilder.updateAllColumns(record: DbHelpPointConsumedDetailRecord) =
    apply {
        set(id).equalTo(record::id)
        set(consumedAchievementId).equalTo(record::consumedAchievementId)
        set(helpItemId).equalTo(record::helpItemId)
    }

fun KotlinUpdateBuilder.updateSelectiveColumns(record: DbHelpPointConsumedDetailRecord) =
    apply {
        set(id).equalToWhenPresent(record::id)
        set(consumedAchievementId).equalToWhenPresent(record::consumedAchievementId)
        set(helpItemId).equalToWhenPresent(record::helpItemId)
    }

fun DbHelpPointConsumedDetailMapper.updateByPrimaryKey(record: DbHelpPointConsumedDetailRecord) =
    update {
        set(consumedAchievementId).equalTo(record::consumedAchievementId)
        set(helpItemId).equalTo(record::helpItemId)
        where(id, isEqualTo(record::id))
    }

fun DbHelpPointConsumedDetailMapper.updateByPrimaryKeySelective(record: DbHelpPointConsumedDetailRecord) =
    update {
        set(consumedAchievementId).equalToWhenPresent(record::consumedAchievementId)
        set(helpItemId).equalToWhenPresent(record::helpItemId)
        where(id, isEqualTo(record::id))
    }