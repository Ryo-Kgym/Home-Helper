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
import home.helper.api.persistence.database.mysql.table.DbHelpPointConsumedAchievementDynamicSqlSupport.DbHelpPointConsumedAchievement
import home.helper.api.persistence.database.mysql.table.DbHelpPointConsumedAchievementDynamicSqlSupport.DbHelpPointConsumedAchievement.consumedDatetime
import home.helper.api.persistence.database.mysql.table.DbHelpPointConsumedAchievementDynamicSqlSupport.DbHelpPointConsumedAchievement.consumedPoint
import home.helper.api.persistence.database.mysql.table.DbHelpPointConsumedAchievementDynamicSqlSupport.DbHelpPointConsumedAchievement.id
import home.helper.api.persistence.database.mysql.table.DbHelpPointConsumedAchievementDynamicSqlSupport.DbHelpPointConsumedAchievement.userId

fun DbHelpPointConsumedAchievementMapper.count(completer: CountCompleter) =
    countFrom(this::count, DbHelpPointConsumedAchievement, completer)

fun DbHelpPointConsumedAchievementMapper.delete(completer: DeleteCompleter) =
    deleteFrom(this::delete, DbHelpPointConsumedAchievement, completer)

fun DbHelpPointConsumedAchievementMapper.deleteByPrimaryKey(id_: String) =
    delete {
        where(id, isEqualTo(id_))
    }

fun DbHelpPointConsumedAchievementMapper.insert(record: DbHelpPointConsumedAchievementRecord) =
    insert(this::insert, record, DbHelpPointConsumedAchievement) {
        map(id).toProperty("id")
        map(userId).toProperty("userId")
        map(consumedDatetime).toProperty("consumedDatetime")
        map(consumedPoint).toProperty("consumedPoint")
    }

fun DbHelpPointConsumedAchievementMapper.insertMultiple(records: Collection<DbHelpPointConsumedAchievementRecord>) =
    insertMultiple(this::insertMultiple, records, DbHelpPointConsumedAchievement) {
        map(id).toProperty("id")
        map(userId).toProperty("userId")
        map(consumedDatetime).toProperty("consumedDatetime")
        map(consumedPoint).toProperty("consumedPoint")
    }

fun DbHelpPointConsumedAchievementMapper.insertMultiple(vararg records: DbHelpPointConsumedAchievementRecord) =
    insertMultiple(records.toList())

fun DbHelpPointConsumedAchievementMapper.insertSelective(record: DbHelpPointConsumedAchievementRecord) =
    insert(this::insert, record, DbHelpPointConsumedAchievement) {
        map(id).toPropertyWhenPresent("id", record::id)
        map(userId).toPropertyWhenPresent("userId", record::userId)
        map(consumedDatetime).toPropertyWhenPresent("consumedDatetime", record::consumedDatetime)
        map(consumedPoint).toPropertyWhenPresent("consumedPoint", record::consumedPoint)
    }

private val columnList = listOf(id, userId, consumedDatetime, consumedPoint)

fun DbHelpPointConsumedAchievementMapper.selectOne(completer: SelectCompleter) =
    selectOne(this::selectOne, columnList, DbHelpPointConsumedAchievement, completer)

fun DbHelpPointConsumedAchievementMapper.select(completer: SelectCompleter) =
    selectList(this::selectMany, columnList, DbHelpPointConsumedAchievement, completer)

fun DbHelpPointConsumedAchievementMapper.selectDistinct(completer: SelectCompleter) =
    selectDistinct(this::selectMany, columnList, DbHelpPointConsumedAchievement, completer)

fun DbHelpPointConsumedAchievementMapper.selectByPrimaryKey(id_: String) =
    selectOne {
        where(id, isEqualTo(id_))
    }

fun DbHelpPointConsumedAchievementMapper.update(completer: UpdateCompleter) =
    update(this::update, DbHelpPointConsumedAchievement, completer)

fun KotlinUpdateBuilder.updateAllColumns(record: DbHelpPointConsumedAchievementRecord) =
    apply {
        set(id).equalTo(record::id)
        set(userId).equalTo(record::userId)
        set(consumedDatetime).equalTo(record::consumedDatetime)
        set(consumedPoint).equalTo(record::consumedPoint)
    }

fun KotlinUpdateBuilder.updateSelectiveColumns(record: DbHelpPointConsumedAchievementRecord) =
    apply {
        set(id).equalToWhenPresent(record::id)
        set(userId).equalToWhenPresent(record::userId)
        set(consumedDatetime).equalToWhenPresent(record::consumedDatetime)
        set(consumedPoint).equalToWhenPresent(record::consumedPoint)
    }

fun DbHelpPointConsumedAchievementMapper.updateByPrimaryKey(record: DbHelpPointConsumedAchievementRecord) =
    update {
        set(userId).equalTo(record::userId)
        set(consumedDatetime).equalTo(record::consumedDatetime)
        set(consumedPoint).equalTo(record::consumedPoint)
        where(id, isEqualTo(record::id))
    }

fun DbHelpPointConsumedAchievementMapper.updateByPrimaryKeySelective(record: DbHelpPointConsumedAchievementRecord) =
    update {
        set(userId).equalToWhenPresent(record::userId)
        set(consumedDatetime).equalToWhenPresent(record::consumedDatetime)
        set(consumedPoint).equalToWhenPresent(record::consumedPoint)
        where(id, isEqualTo(record::id))
    }