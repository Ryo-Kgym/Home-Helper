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
import home.helper.api.persistence.database.mysql.table.DbHelpPointEarnedDetailDynamicSqlSupport.DbHelpPointEarnedDetail
import home.helper.api.persistence.database.mysql.table.DbHelpPointEarnedDetailDynamicSqlSupport.DbHelpPointEarnedDetail.earnedAchievementId
import home.helper.api.persistence.database.mysql.table.DbHelpPointEarnedDetailDynamicSqlSupport.DbHelpPointEarnedDetail.helpItemCount
import home.helper.api.persistence.database.mysql.table.DbHelpPointEarnedDetailDynamicSqlSupport.DbHelpPointEarnedDetail.helpItemId
import home.helper.api.persistence.database.mysql.table.DbHelpPointEarnedDetailDynamicSqlSupport.DbHelpPointEarnedDetail.helpItemTotalPoint
import home.helper.api.persistence.database.mysql.table.DbHelpPointEarnedDetailDynamicSqlSupport.DbHelpPointEarnedDetail.id

fun DbHelpPointEarnedDetailMapper.count(completer: CountCompleter) =
    countFrom(this::count, DbHelpPointEarnedDetail, completer)

fun DbHelpPointEarnedDetailMapper.delete(completer: DeleteCompleter) =
    deleteFrom(this::delete, DbHelpPointEarnedDetail, completer)

fun DbHelpPointEarnedDetailMapper.deleteByPrimaryKey(id_: String) =
    delete {
        where(id, isEqualTo(id_))
    }

fun DbHelpPointEarnedDetailMapper.insert(record: DbHelpPointEarnedDetailRecord) =
    insert(this::insert, record, DbHelpPointEarnedDetail) {
        map(id).toProperty("id")
        map(earnedAchievementId).toProperty("earnedAchievementId")
        map(helpItemId).toProperty("helpItemId")
        map(helpItemCount).toProperty("helpItemCount")
        map(helpItemTotalPoint).toProperty("helpItemTotalPoint")
    }

fun DbHelpPointEarnedDetailMapper.insertMultiple(records: Collection<DbHelpPointEarnedDetailRecord>) =
    insertMultiple(this::insertMultiple, records, DbHelpPointEarnedDetail) {
        map(id).toProperty("id")
        map(earnedAchievementId).toProperty("earnedAchievementId")
        map(helpItemId).toProperty("helpItemId")
        map(helpItemCount).toProperty("helpItemCount")
        map(helpItemTotalPoint).toProperty("helpItemTotalPoint")
    }

fun DbHelpPointEarnedDetailMapper.insertMultiple(vararg records: DbHelpPointEarnedDetailRecord) =
    insertMultiple(records.toList())

fun DbHelpPointEarnedDetailMapper.insertSelective(record: DbHelpPointEarnedDetailRecord) =
    insert(this::insert, record, DbHelpPointEarnedDetail) {
        map(id).toPropertyWhenPresent("id", record::id)
        map(earnedAchievementId).toPropertyWhenPresent("earnedAchievementId", record::earnedAchievementId)
        map(helpItemId).toPropertyWhenPresent("helpItemId", record::helpItemId)
        map(helpItemCount).toPropertyWhenPresent("helpItemCount", record::helpItemCount)
        map(helpItemTotalPoint).toPropertyWhenPresent("helpItemTotalPoint", record::helpItemTotalPoint)
    }

private val columnList = listOf(id, earnedAchievementId, helpItemId, helpItemCount, helpItemTotalPoint)

fun DbHelpPointEarnedDetailMapper.selectOne(completer: SelectCompleter) =
    selectOne(this::selectOne, columnList, DbHelpPointEarnedDetail, completer)

fun DbHelpPointEarnedDetailMapper.select(completer: SelectCompleter) =
    selectList(this::selectMany, columnList, DbHelpPointEarnedDetail, completer)

fun DbHelpPointEarnedDetailMapper.selectDistinct(completer: SelectCompleter) =
    selectDistinct(this::selectMany, columnList, DbHelpPointEarnedDetail, completer)

fun DbHelpPointEarnedDetailMapper.selectByPrimaryKey(id_: String) =
    selectOne {
        where(id, isEqualTo(id_))
    }

fun DbHelpPointEarnedDetailMapper.update(completer: UpdateCompleter) =
    update(this::update, DbHelpPointEarnedDetail, completer)

fun KotlinUpdateBuilder.updateAllColumns(record: DbHelpPointEarnedDetailRecord) =
    apply {
        set(id).equalTo(record::id)
        set(earnedAchievementId).equalTo(record::earnedAchievementId)
        set(helpItemId).equalTo(record::helpItemId)
        set(helpItemCount).equalTo(record::helpItemCount)
        set(helpItemTotalPoint).equalTo(record::helpItemTotalPoint)
    }

fun KotlinUpdateBuilder.updateSelectiveColumns(record: DbHelpPointEarnedDetailRecord) =
    apply {
        set(id).equalToWhenPresent(record::id)
        set(earnedAchievementId).equalToWhenPresent(record::earnedAchievementId)
        set(helpItemId).equalToWhenPresent(record::helpItemId)
        set(helpItemCount).equalToWhenPresent(record::helpItemCount)
        set(helpItemTotalPoint).equalToWhenPresent(record::helpItemTotalPoint)
    }

fun DbHelpPointEarnedDetailMapper.updateByPrimaryKey(record: DbHelpPointEarnedDetailRecord) =
    update {
        set(earnedAchievementId).equalTo(record::earnedAchievementId)
        set(helpItemId).equalTo(record::helpItemId)
        set(helpItemCount).equalTo(record::helpItemCount)
        set(helpItemTotalPoint).equalTo(record::helpItemTotalPoint)
        where(id, isEqualTo(record::id))
    }

fun DbHelpPointEarnedDetailMapper.updateByPrimaryKeySelective(record: DbHelpPointEarnedDetailRecord) =
    update {
        set(earnedAchievementId).equalToWhenPresent(record::earnedAchievementId)
        set(helpItemId).equalToWhenPresent(record::helpItemId)
        set(helpItemCount).equalToWhenPresent(record::helpItemCount)
        set(helpItemTotalPoint).equalToWhenPresent(record::helpItemTotalPoint)
        where(id, isEqualTo(record::id))
    }