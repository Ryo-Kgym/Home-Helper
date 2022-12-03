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
import home.helper.api.persistence.database.mysql.id.IdType
import home.helper.api.persistence.database.mysql.table.DbIdHolderDynamicSqlSupport.DbIdHolder
import home.helper.api.persistence.database.mysql.table.DbIdHolderDynamicSqlSupport.DbIdHolder.currentId
import home.helper.api.persistence.database.mysql.table.DbIdHolderDynamicSqlSupport.DbIdHolder.idType

fun DbIdHolderMapper.count(completer: CountCompleter) =
    countFrom(this::count, DbIdHolder, completer)

fun DbIdHolderMapper.delete(completer: DeleteCompleter) =
    deleteFrom(this::delete, DbIdHolder, completer)

fun DbIdHolderMapper.deleteByPrimaryKey(idType_: IdType) =
    delete {
        where(idType, isEqualTo(idType_))
    }

fun DbIdHolderMapper.insert(record: DbIdHolderRecord) =
    insert(this::insert, record, DbIdHolder) {
        map(idType).toProperty("idType")
        map(currentId).toProperty("currentId")
    }

fun DbIdHolderMapper.insertMultiple(records: Collection<DbIdHolderRecord>) =
    insertMultiple(this::insertMultiple, records, DbIdHolder) {
        map(idType).toProperty("idType")
        map(currentId).toProperty("currentId")
    }

fun DbIdHolderMapper.insertMultiple(vararg records: DbIdHolderRecord) =
    insertMultiple(records.toList())

fun DbIdHolderMapper.insertSelective(record: DbIdHolderRecord) =
    insert(this::insert, record, DbIdHolder) {
        map(idType).toPropertyWhenPresent("idType", record::idType)
        map(currentId).toPropertyWhenPresent("currentId", record::currentId)
    }

private val columnList = listOf(idType, currentId)

fun DbIdHolderMapper.selectOne(completer: SelectCompleter) =
    selectOne(this::selectOne, columnList, DbIdHolder, completer)

fun DbIdHolderMapper.select(completer: SelectCompleter) =
    selectList(this::selectMany, columnList, DbIdHolder, completer)

fun DbIdHolderMapper.selectDistinct(completer: SelectCompleter) =
    selectDistinct(this::selectMany, columnList, DbIdHolder, completer)

fun DbIdHolderMapper.selectByPrimaryKey(idType_: IdType) =
    selectOne {
        where(idType, isEqualTo(idType_))
    }

fun DbIdHolderMapper.update(completer: UpdateCompleter) =
    update(this::update, DbIdHolder, completer)

fun KotlinUpdateBuilder.updateAllColumns(record: DbIdHolderRecord) =
    apply {
        set(idType).equalTo(record::idType)
        set(currentId).equalTo(record::currentId)
    }

fun KotlinUpdateBuilder.updateSelectiveColumns(record: DbIdHolderRecord) =
    apply {
        set(idType).equalToWhenPresent(record::idType)
        set(currentId).equalToWhenPresent(record::currentId)
    }

fun DbIdHolderMapper.updateByPrimaryKey(record: DbIdHolderRecord) =
    update {
        set(currentId).equalTo(record::currentId)
        where(idType, isEqualTo(record::idType))
    }

fun DbIdHolderMapper.updateByPrimaryKeySelective(record: DbIdHolderRecord) =
    update {
        set(currentId).equalToWhenPresent(record::currentId)
        where(idType, isEqualTo(record::idType))
    }