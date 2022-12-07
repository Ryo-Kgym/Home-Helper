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
import home.helper.api.persistence.database.mysql.table.DbUserPointDynamicSqlSupport.DbUserPoint
import home.helper.api.persistence.database.mysql.table.DbUserPointDynamicSqlSupport.DbUserPoint.lastHelpDatetime
import home.helper.api.persistence.database.mysql.table.DbUserPointDynamicSqlSupport.DbUserPoint.point
import home.helper.api.persistence.database.mysql.table.DbUserPointDynamicSqlSupport.DbUserPoint.userId

fun DbUserPointMapper.count(completer: CountCompleter) =
    countFrom(this::count, DbUserPoint, completer)

fun DbUserPointMapper.delete(completer: DeleteCompleter) =
    deleteFrom(this::delete, DbUserPoint, completer)

fun DbUserPointMapper.deleteByPrimaryKey(userId_: String) =
    delete {
        where(userId, isEqualTo(userId_))
    }

fun DbUserPointMapper.insert(record: DbUserPointRecord) =
    insert(this::insert, record, DbUserPoint) {
        map(userId).toProperty("userId")
        map(point).toProperty("point")
        map(lastHelpDatetime).toProperty("lastHelpDatetime")
    }

fun DbUserPointMapper.insertMultiple(records: Collection<DbUserPointRecord>) =
    insertMultiple(this::insertMultiple, records, DbUserPoint) {
        map(userId).toProperty("userId")
        map(point).toProperty("point")
        map(lastHelpDatetime).toProperty("lastHelpDatetime")
    }

fun DbUserPointMapper.insertMultiple(vararg records: DbUserPointRecord) =
    insertMultiple(records.toList())

fun DbUserPointMapper.insertSelective(record: DbUserPointRecord) =
    insert(this::insert, record, DbUserPoint) {
        map(userId).toPropertyWhenPresent("userId", record::userId)
        map(point).toPropertyWhenPresent("point", record::point)
        map(lastHelpDatetime).toPropertyWhenPresent("lastHelpDatetime", record::lastHelpDatetime)
    }

private val columnList = listOf(userId, point, lastHelpDatetime)

fun DbUserPointMapper.selectOne(completer: SelectCompleter) =
    selectOne(this::selectOne, columnList, DbUserPoint, completer)

fun DbUserPointMapper.select(completer: SelectCompleter) =
    selectList(this::selectMany, columnList, DbUserPoint, completer)

fun DbUserPointMapper.selectDistinct(completer: SelectCompleter) =
    selectDistinct(this::selectMany, columnList, DbUserPoint, completer)

fun DbUserPointMapper.selectByPrimaryKey(userId_: String) =
    selectOne {
        where(userId, isEqualTo(userId_))
    }

fun DbUserPointMapper.update(completer: UpdateCompleter) =
    update(this::update, DbUserPoint, completer)

fun KotlinUpdateBuilder.updateAllColumns(record: DbUserPointRecord) =
    apply {
        set(userId).equalTo(record::userId)
        set(point).equalTo(record::point)
        set(lastHelpDatetime).equalTo(record::lastHelpDatetime)
    }

fun KotlinUpdateBuilder.updateSelectiveColumns(record: DbUserPointRecord) =
    apply {
        set(userId).equalToWhenPresent(record::userId)
        set(point).equalToWhenPresent(record::point)
        set(lastHelpDatetime).equalToWhenPresent(record::lastHelpDatetime)
    }

fun DbUserPointMapper.updateByPrimaryKey(record: DbUserPointRecord) =
    update {
        set(point).equalTo(record::point)
        set(lastHelpDatetime).equalTo(record::lastHelpDatetime)
        where(userId, isEqualTo(record::userId))
    }

fun DbUserPointMapper.updateByPrimaryKeySelective(record: DbUserPointRecord) =
    update {
        set(point).equalToWhenPresent(record::point)
        set(lastHelpDatetime).equalToWhenPresent(record::lastHelpDatetime)
        where(userId, isEqualTo(record::userId))
    }