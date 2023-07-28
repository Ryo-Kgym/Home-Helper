/*
 * Auto-generated file. Created by MyBatis Generator
 */
@file:Suppress("DEPRECATION")

package home.helper.api.persistence.database.mysql.table

import home.helper.api.persistence.database.mysql.table.DbMExchangeItemDynamicSqlSupport.DbMExchangeItem
import home.helper.api.persistence.database.mysql.table.DbMExchangeItemDynamicSqlSupport.DbMExchangeItem.id
import home.helper.api.persistence.database.mysql.table.DbMExchangeItemDynamicSqlSupport.DbMExchangeItem.name
import home.helper.api.persistence.database.mysql.table.DbMExchangeItemDynamicSqlSupport.DbMExchangeItem.point
import org.mybatis.dynamic.sql.SqlBuilder.isEqualTo
import org.mybatis.dynamic.sql.util.kotlin.*
import org.mybatis.dynamic.sql.util.kotlin.mybatis3.*

fun DbMExchangeItemMapper.count(completer: CountCompleter) =
    countFrom(this::count, DbMExchangeItem, completer)

fun DbMExchangeItemMapper.delete(completer: DeleteCompleter) =
    deleteFrom(this::delete, DbMExchangeItem, completer)

fun DbMExchangeItemMapper.deleteByPrimaryKey(id_: String) =
    delete {
        where(id, isEqualTo(id_))
    }

fun DbMExchangeItemMapper.insert(record: DbMExchangeItemRecord) =
    insert(this::insert, record, DbMExchangeItem) {
        map(id).toProperty("id")
        map(name).toProperty("name")
        map(point).toProperty("point")
    }

fun DbMExchangeItemMapper.insertMultiple(records: Collection<DbMExchangeItemRecord>) =
    insertMultiple(this::insertMultiple, records, DbMExchangeItem) {
        map(id).toProperty("id")
        map(name).toProperty("name")
        map(point).toProperty("point")
    }

fun DbMExchangeItemMapper.insertMultiple(vararg records: DbMExchangeItemRecord) =
    insertMultiple(records.toList())

fun DbMExchangeItemMapper.insertSelective(record: DbMExchangeItemRecord) =
    insert(this::insert, record, DbMExchangeItem) {
        map(id).toPropertyWhenPresent("id", record::id)
        map(name).toPropertyWhenPresent("name", record::name)
        map(point).toPropertyWhenPresent("point", record::point)
    }

private val columnList = listOf(id, name, point)

fun DbMExchangeItemMapper.selectOne(completer: SelectCompleter) =
    selectOne(this::selectOne, columnList, DbMExchangeItem, completer)

fun DbMExchangeItemMapper.select(completer: SelectCompleter) =
    selectList(this::selectMany, columnList, DbMExchangeItem, completer)

fun DbMExchangeItemMapper.selectDistinct(completer: SelectCompleter) =
    selectDistinct(this::selectMany, columnList, DbMExchangeItem, completer)

fun DbMExchangeItemMapper.selectByPrimaryKey(id_: String) =
    selectOne {
        where(id, isEqualTo(id_))
    }

fun DbMExchangeItemMapper.update(completer: UpdateCompleter) =
    update(this::update, DbMExchangeItem, completer)

fun KotlinUpdateBuilder.updateAllColumns(record: DbMExchangeItemRecord) =
    apply {
        set(id).equalTo(record::id)
        set(name).equalTo(record::name)
        set(point).equalTo(record::point)
    }

fun KotlinUpdateBuilder.updateSelectiveColumns(record: DbMExchangeItemRecord) =
    apply {
        set(id).equalToWhenPresent(record::id)
        set(name).equalToWhenPresent(record::name)
        set(point).equalToWhenPresent(record::point)
    }

fun DbMExchangeItemMapper.updateByPrimaryKey(record: DbMExchangeItemRecord) =
    update {
        set(name).equalTo(record::name)
        set(point).equalTo(record::point)
        where(id, isEqualTo(record::id))
    }

fun DbMExchangeItemMapper.updateByPrimaryKeySelective(record: DbMExchangeItemRecord) =
    update {
        set(name).equalToWhenPresent(record::name)
        set(point).equalToWhenPresent(record::point)
        where(id, isEqualTo(record::id))
    }