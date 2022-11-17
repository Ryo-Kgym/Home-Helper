/*
 * Auto-generated file. Created by MyBatis Generator
 */
@file:Suppress("DEPRECATION")

package home.helper.api.persistence.database.mysql.table

import home.helper.api.persistence.database.mysql.table.DbHelpPointEarnedDetailDynamicSqlSupport.DbHelpPointEarnedDetail
import home.helper.api.persistence.database.mysql.table.DbHelpPointEarnedDetailDynamicSqlSupport.DbHelpPointEarnedDetail.achievementId
import home.helper.api.persistence.database.mysql.table.DbHelpPointEarnedDetailDynamicSqlSupport.DbHelpPointEarnedDetail.id
import home.helper.api.persistence.database.mysql.table.DbHelpPointEarnedDetailDynamicSqlSupport.DbHelpPointEarnedDetail.itemId
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

fun DbHelpPointEarnedDetailMapper.count(completer: CountCompleter) =
    countFrom(this::count, DbHelpPointEarnedDetail, completer)

fun DbHelpPointEarnedDetailMapper.delete(completer: DeleteCompleter) =
    deleteFrom(this::delete, DbHelpPointEarnedDetail, completer)

fun DbHelpPointEarnedDetailMapper.deleteByPrimaryKey(id_: Long) =
    delete {
        where(id, isEqualTo(id_))
    }

fun DbHelpPointEarnedDetailMapper.insert(record: DbHelpPointEarnedDetailRecord) =
    insert(this::insert, record, DbHelpPointEarnedDetail) {
        map(id).toProperty("id")
        map(achievementId).toProperty("achievementId")
        map(itemId).toProperty("itemId")
    }

fun DbHelpPointEarnedDetailMapper.insertMultiple(records: Collection<DbHelpPointEarnedDetailRecord>) =
    insertMultiple(this::insertMultiple, records, DbHelpPointEarnedDetail) {
        map(id).toProperty("id")
        map(achievementId).toProperty("achievementId")
        map(itemId).toProperty("itemId")
    }

fun DbHelpPointEarnedDetailMapper.insertMultiple(vararg records: DbHelpPointEarnedDetailRecord) =
    insertMultiple(records.toList())

fun DbHelpPointEarnedDetailMapper.insertSelective(record: DbHelpPointEarnedDetailRecord) =
    insert(this::insert, record, DbHelpPointEarnedDetail) {
        map(id).toPropertyWhenPresent("id", record::id)
        map(achievementId).toPropertyWhenPresent("achievementId", record::achievementId)
        map(itemId).toPropertyWhenPresent("itemId", record::itemId)
    }

private val columnList = listOf(id, achievementId, itemId)

fun DbHelpPointEarnedDetailMapper.selectOne(completer: SelectCompleter) =
    selectOne(this::selectOne, columnList, DbHelpPointEarnedDetail, completer)

fun DbHelpPointEarnedDetailMapper.select(completer: SelectCompleter) =
    selectList(this::selectMany, columnList, DbHelpPointEarnedDetail, completer)

fun DbHelpPointEarnedDetailMapper.selectDistinct(completer: SelectCompleter) =
    selectDistinct(this::selectMany, columnList, DbHelpPointEarnedDetail, completer)

fun DbHelpPointEarnedDetailMapper.selectByPrimaryKey(id_: Long) =
    selectOne {
        where(id, isEqualTo(id_))
    }

fun DbHelpPointEarnedDetailMapper.update(completer: UpdateCompleter) =
    update(this::update, DbHelpPointEarnedDetail, completer)

fun KotlinUpdateBuilder.updateAllColumns(record: DbHelpPointEarnedDetailRecord) =
    apply {
        set(id).equalTo(record::id)
        set(achievementId).equalTo(record::achievementId)
        set(itemId).equalTo(record::itemId)
    }

fun KotlinUpdateBuilder.updateSelectiveColumns(record: DbHelpPointEarnedDetailRecord) =
    apply {
        set(id).equalToWhenPresent(record::id)
        set(achievementId).equalToWhenPresent(record::achievementId)
        set(itemId).equalToWhenPresent(record::itemId)
    }

fun DbHelpPointEarnedDetailMapper.updateByPrimaryKey(record: DbHelpPointEarnedDetailRecord) =
    update {
        set(achievementId).equalTo(record::achievementId)
        set(itemId).equalTo(record::itemId)
        where(id, isEqualTo(record::id))
    }

fun DbHelpPointEarnedDetailMapper.updateByPrimaryKeySelective(record: DbHelpPointEarnedDetailRecord) =
    update {
        set(achievementId).equalToWhenPresent(record::achievementId)
        set(itemId).equalToWhenPresent(record::itemId)
        where(id, isEqualTo(record::id))
    }