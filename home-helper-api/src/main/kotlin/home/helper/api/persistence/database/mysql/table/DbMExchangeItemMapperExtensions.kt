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
import home.helper.api.persistence.database.mysql.table.DbMExchangeItemDynamicSqlSupport.DbMExchangeItem
import home.helper.api.persistence.database.mysql.table.DbMExchangeItemDynamicSqlSupport.DbMExchangeItem.exchangePoint
import home.helper.api.persistence.database.mysql.table.DbMExchangeItemDynamicSqlSupport.DbMExchangeItem.id
import home.helper.api.persistence.database.mysql.table.DbMExchangeItemDynamicSqlSupport.DbMExchangeItem.itemName

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
        map(itemName).toProperty("itemName")
        map(exchangePoint).toProperty("exchangePoint")
    }

fun DbMExchangeItemMapper.insertMultiple(records: Collection<DbMExchangeItemRecord>) =
    insertMultiple(this::insertMultiple, records, DbMExchangeItem) {
        map(id).toProperty("id")
        map(itemName).toProperty("itemName")
        map(exchangePoint).toProperty("exchangePoint")
    }

fun DbMExchangeItemMapper.insertMultiple(vararg records: DbMExchangeItemRecord) =
    insertMultiple(records.toList())

fun DbMExchangeItemMapper.insertSelective(record: DbMExchangeItemRecord) =
    insert(this::insert, record, DbMExchangeItem) {
        map(id).toPropertyWhenPresent("id", record::id)
        map(itemName).toPropertyWhenPresent("itemName", record::itemName)
        map(exchangePoint).toPropertyWhenPresent("exchangePoint", record::exchangePoint)
    }

private val columnList = listOf(id, itemName, exchangePoint)

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
        set(itemName).equalTo(record::itemName)
        set(exchangePoint).equalTo(record::exchangePoint)
    }

fun KotlinUpdateBuilder.updateSelectiveColumns(record: DbMExchangeItemRecord) =
    apply {
        set(id).equalToWhenPresent(record::id)
        set(itemName).equalToWhenPresent(record::itemName)
        set(exchangePoint).equalToWhenPresent(record::exchangePoint)
    }

fun DbMExchangeItemMapper.updateByPrimaryKey(record: DbMExchangeItemRecord) =
    update {
        set(itemName).equalTo(record::itemName)
        set(exchangePoint).equalTo(record::exchangePoint)
        where(id, isEqualTo(record::id))
    }

fun DbMExchangeItemMapper.updateByPrimaryKeySelective(record: DbMExchangeItemRecord) =
    update {
        set(itemName).equalToWhenPresent(record::itemName)
        set(exchangePoint).equalToWhenPresent(record::exchangePoint)
        where(id, isEqualTo(record::id))
    }