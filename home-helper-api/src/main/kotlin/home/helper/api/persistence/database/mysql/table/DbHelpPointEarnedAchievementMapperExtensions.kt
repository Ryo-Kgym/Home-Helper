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
import home.helper.api.persistence.database.mysql.table.DbHelpPointEarnedAchievementDynamicSqlSupport.DbHelpPointEarnedAchievement
import home.helper.api.persistence.database.mysql.table.DbHelpPointEarnedAchievementDynamicSqlSupport.DbHelpPointEarnedAchievement.earnedDatetime
import home.helper.api.persistence.database.mysql.table.DbHelpPointEarnedAchievementDynamicSqlSupport.DbHelpPointEarnedAchievement.earnedPoint
import home.helper.api.persistence.database.mysql.table.DbHelpPointEarnedAchievementDynamicSqlSupport.DbHelpPointEarnedAchievement.id
import home.helper.api.persistence.database.mysql.table.DbHelpPointEarnedAchievementDynamicSqlSupport.DbHelpPointEarnedAchievement.userId

fun DbHelpPointEarnedAchievementMapper.count(completer: CountCompleter) =
    countFrom(this::count, DbHelpPointEarnedAchievement, completer)

fun DbHelpPointEarnedAchievementMapper.delete(completer: DeleteCompleter) =
    deleteFrom(this::delete, DbHelpPointEarnedAchievement, completer)

fun DbHelpPointEarnedAchievementMapper.deleteByPrimaryKey(id_: String) =
    delete {
        where(id, isEqualTo(id_))
    }

fun DbHelpPointEarnedAchievementMapper.insert(record: DbHelpPointEarnedAchievementRecord) =
    insert(this::insert, record, DbHelpPointEarnedAchievement) {
        map(id).toProperty("id")
        map(userId).toProperty("userId")
        map(earnedDatetime).toProperty("earnedDatetime")
        map(earnedPoint).toProperty("earnedPoint")
    }

fun DbHelpPointEarnedAchievementMapper.insertMultiple(records: Collection<DbHelpPointEarnedAchievementRecord>) =
    insertMultiple(this::insertMultiple, records, DbHelpPointEarnedAchievement) {
        map(id).toProperty("id")
        map(userId).toProperty("userId")
        map(earnedDatetime).toProperty("earnedDatetime")
        map(earnedPoint).toProperty("earnedPoint")
    }

fun DbHelpPointEarnedAchievementMapper.insertMultiple(vararg records: DbHelpPointEarnedAchievementRecord) =
    insertMultiple(records.toList())

fun DbHelpPointEarnedAchievementMapper.insertSelective(record: DbHelpPointEarnedAchievementRecord) =
    insert(this::insert, record, DbHelpPointEarnedAchievement) {
        map(id).toPropertyWhenPresent("id", record::id)
        map(userId).toPropertyWhenPresent("userId", record::userId)
        map(earnedDatetime).toPropertyWhenPresent("earnedDatetime", record::earnedDatetime)
        map(earnedPoint).toPropertyWhenPresent("earnedPoint", record::earnedPoint)
    }

private val columnList = listOf(id, userId, earnedDatetime, earnedPoint)

fun DbHelpPointEarnedAchievementMapper.selectOne(completer: SelectCompleter) =
    selectOne(this::selectOne, columnList, DbHelpPointEarnedAchievement, completer)

fun DbHelpPointEarnedAchievementMapper.select(completer: SelectCompleter) =
    selectList(this::selectMany, columnList, DbHelpPointEarnedAchievement, completer)

fun DbHelpPointEarnedAchievementMapper.selectDistinct(completer: SelectCompleter) =
    selectDistinct(this::selectMany, columnList, DbHelpPointEarnedAchievement, completer)

fun DbHelpPointEarnedAchievementMapper.selectByPrimaryKey(id_: String) =
    selectOne {
        where(id, isEqualTo(id_))
    }

fun DbHelpPointEarnedAchievementMapper.update(completer: UpdateCompleter) =
    update(this::update, DbHelpPointEarnedAchievement, completer)

fun KotlinUpdateBuilder.updateAllColumns(record: DbHelpPointEarnedAchievementRecord) =
    apply {
        set(id).equalTo(record::id)
        set(userId).equalTo(record::userId)
        set(earnedDatetime).equalTo(record::earnedDatetime)
        set(earnedPoint).equalTo(record::earnedPoint)
    }

fun KotlinUpdateBuilder.updateSelectiveColumns(record: DbHelpPointEarnedAchievementRecord) =
    apply {
        set(id).equalToWhenPresent(record::id)
        set(userId).equalToWhenPresent(record::userId)
        set(earnedDatetime).equalToWhenPresent(record::earnedDatetime)
        set(earnedPoint).equalToWhenPresent(record::earnedPoint)
    }

fun DbHelpPointEarnedAchievementMapper.updateByPrimaryKey(record: DbHelpPointEarnedAchievementRecord) =
    update {
        set(userId).equalTo(record::userId)
        set(earnedDatetime).equalTo(record::earnedDatetime)
        set(earnedPoint).equalTo(record::earnedPoint)
        where(id, isEqualTo(record::id))
    }

fun DbHelpPointEarnedAchievementMapper.updateByPrimaryKeySelective(record: DbHelpPointEarnedAchievementRecord) =
    update {
        set(userId).equalToWhenPresent(record::userId)
        set(earnedDatetime).equalToWhenPresent(record::earnedDatetime)
        set(earnedPoint).equalToWhenPresent(record::earnedPoint)
        where(id, isEqualTo(record::id))
    }