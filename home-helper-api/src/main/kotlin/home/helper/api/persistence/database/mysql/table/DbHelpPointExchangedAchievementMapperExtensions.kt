/*
 * Auto-generated file. Created by MyBatis Generator
 */
@file:Suppress("DEPRECATION")

package home.helper.api.persistence.database.mysql.table

import home.helper.api.persistence.database.mysql.table.DbHelpPointExchangedAchievementDynamicSqlSupport.DbHelpPointExchangedAchievement
import home.helper.api.persistence.database.mysql.table.DbHelpPointExchangedAchievementDynamicSqlSupport.DbHelpPointExchangedAchievement.exchangeCount
import home.helper.api.persistence.database.mysql.table.DbHelpPointExchangedAchievementDynamicSqlSupport.DbHelpPointExchangedAchievement.exchangeItemId
import home.helper.api.persistence.database.mysql.table.DbHelpPointExchangedAchievementDynamicSqlSupport.DbHelpPointExchangedAchievement.exchangeTotalPoint
import home.helper.api.persistence.database.mysql.table.DbHelpPointExchangedAchievementDynamicSqlSupport.DbHelpPointExchangedAchievement.exchangedDatetime
import home.helper.api.persistence.database.mysql.table.DbHelpPointExchangedAchievementDynamicSqlSupport.DbHelpPointExchangedAchievement.id
import home.helper.api.persistence.database.mysql.table.DbHelpPointExchangedAchievementDynamicSqlSupport.DbHelpPointExchangedAchievement.userId
import home.helper.api.persistence.database.mysql.table.DbHelpPointExchangedAchievementRecord
import org.mybatis.dynamic.sql.SqlBuilder.isEqualTo
import org.mybatis.dynamic.sql.util.kotlin.*
import org.mybatis.dynamic.sql.util.kotlin.mybatis3.*

fun DbHelpPointExchangedAchievementMapper.count(completer: CountCompleter) =
    countFrom(this::count, DbHelpPointExchangedAchievement, completer)

fun DbHelpPointExchangedAchievementMapper.delete(completer: DeleteCompleter) =
    deleteFrom(this::delete, DbHelpPointExchangedAchievement, completer)

fun DbHelpPointExchangedAchievementMapper.deleteByPrimaryKey(id_: String) =
    delete {
        where(id, isEqualTo(id_))
    }

fun DbHelpPointExchangedAchievementMapper.insert(record: DbHelpPointExchangedAchievementRecord) =
    insert(this::insert, record, DbHelpPointExchangedAchievement) {
        map(id).toProperty("id")
        map(userId).toProperty("userId")
        map(exchangeItemId).toProperty("exchangeItemId")
        map(exchangeCount).toProperty("exchangeCount")
        map(exchangeTotalPoint).toProperty("exchangeTotalPoint")
        map(exchangedDatetime).toProperty("exchangedDatetime")
    }

fun DbHelpPointExchangedAchievementMapper.insertMultiple(records: Collection<DbHelpPointExchangedAchievementRecord>) =
    insertMultiple(this::insertMultiple, records, DbHelpPointExchangedAchievement) {
        map(id).toProperty("id")
        map(userId).toProperty("userId")
        map(exchangeItemId).toProperty("exchangeItemId")
        map(exchangeCount).toProperty("exchangeCount")
        map(exchangeTotalPoint).toProperty("exchangeTotalPoint")
        map(exchangedDatetime).toProperty("exchangedDatetime")
    }

fun DbHelpPointExchangedAchievementMapper.insertMultiple(vararg records: DbHelpPointExchangedAchievementRecord) =
    insertMultiple(records.toList())

fun DbHelpPointExchangedAchievementMapper.insertSelective(record: DbHelpPointExchangedAchievementRecord) =
    insert(this::insert, record, DbHelpPointExchangedAchievement) {
        map(id).toPropertyWhenPresent("id", record::id)
        map(userId).toPropertyWhenPresent("userId", record::userId)
        map(exchangeItemId).toPropertyWhenPresent("exchangeItemId", record::exchangeItemId)
        map(exchangeCount).toPropertyWhenPresent("exchangeCount", record::exchangeCount)
        map(exchangeTotalPoint).toPropertyWhenPresent("exchangeTotalPoint", record::exchangeTotalPoint)
        map(exchangedDatetime).toPropertyWhenPresent("exchangedDatetime", record::exchangedDatetime)
    }

private val columnList = listOf(id, userId, exchangeItemId, exchangeCount, exchangeTotalPoint, exchangedDatetime)

fun DbHelpPointExchangedAchievementMapper.selectOne(completer: SelectCompleter) =
    selectOne(this::selectOne, columnList, DbHelpPointExchangedAchievement, completer)

fun DbHelpPointExchangedAchievementMapper.select(completer: SelectCompleter) =
    selectList(this::selectMany, columnList, DbHelpPointExchangedAchievement, completer)

fun DbHelpPointExchangedAchievementMapper.selectDistinct(completer: SelectCompleter) =
    selectDistinct(this::selectMany, columnList, DbHelpPointExchangedAchievement, completer)

fun DbHelpPointExchangedAchievementMapper.selectByPrimaryKey(id_: String) =
    selectOne {
        where(id, isEqualTo(id_))
    }

fun DbHelpPointExchangedAchievementMapper.update(completer: UpdateCompleter) =
    update(this::update, DbHelpPointExchangedAchievement, completer)

fun KotlinUpdateBuilder.updateAllColumns(record: DbHelpPointExchangedAchievementRecord) =
    apply {
        set(id).equalTo(record::id)
        set(userId).equalTo(record::userId)
        set(exchangeItemId).equalTo(record::exchangeItemId)
        set(exchangeCount).equalTo(record::exchangeCount)
        set(exchangeTotalPoint).equalTo(record::exchangeTotalPoint)
        set(exchangedDatetime).equalTo(record::exchangedDatetime)
    }

fun KotlinUpdateBuilder.updateSelectiveColumns(record: DbHelpPointExchangedAchievementRecord) =
    apply {
        set(id).equalToWhenPresent(record::id)
        set(userId).equalToWhenPresent(record::userId)
        set(exchangeItemId).equalToWhenPresent(record::exchangeItemId)
        set(exchangeCount).equalToWhenPresent(record::exchangeCount)
        set(exchangeTotalPoint).equalToWhenPresent(record::exchangeTotalPoint)
        set(exchangedDatetime).equalToWhenPresent(record::exchangedDatetime)
    }

fun DbHelpPointExchangedAchievementMapper.updateByPrimaryKey(record: DbHelpPointExchangedAchievementRecord) =
    update {
        set(userId).equalTo(record::userId)
        set(exchangeItemId).equalTo(record::exchangeItemId)
        set(exchangeCount).equalTo(record::exchangeCount)
        set(exchangeTotalPoint).equalTo(record::exchangeTotalPoint)
        set(exchangedDatetime).equalTo(record::exchangedDatetime)
        where(id, isEqualTo(record::id))
    }

fun DbHelpPointExchangedAchievementMapper.updateByPrimaryKeySelective(record: DbHelpPointExchangedAchievementRecord) =
    update {
        set(userId).equalToWhenPresent(record::userId)
        set(exchangeItemId).equalToWhenPresent(record::exchangeItemId)
        set(exchangeCount).equalToWhenPresent(record::exchangeCount)
        set(exchangeTotalPoint).equalToWhenPresent(record::exchangeTotalPoint)
        set(exchangedDatetime).equalToWhenPresent(record::exchangedDatetime)
        where(id, isEqualTo(record::id))
    }