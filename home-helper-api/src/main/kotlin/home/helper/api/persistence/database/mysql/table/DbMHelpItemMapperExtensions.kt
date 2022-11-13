/*
 * Auto-generated file. Created by MyBatis Generator
 */
@file:Suppress("DEPRECATION")

package home.helper.api.persistence.database.mysql.table

import home.helper.api.persistence.database.mysql.table.DbMHelpItemDynamicSqlSupport.DbMHelpItem
import home.helper.api.persistence.database.mysql.table.DbMHelpItemDynamicSqlSupport.DbMHelpItem.helpPoint
import home.helper.api.persistence.database.mysql.table.DbMHelpItemDynamicSqlSupport.DbMHelpItem.id
import home.helper.api.persistence.database.mysql.table.DbMHelpItemDynamicSqlSupport.DbMHelpItem.itemName
import home.helper.api.persistence.database.mysql.table.DbMHelpItemDynamicSqlSupport.DbMHelpItem.memo
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

fun DbMHelpItemMapper.count(completer: CountCompleter) =
    countFrom(this::count, DbMHelpItem, completer)

fun DbMHelpItemMapper.delete(completer: DeleteCompleter) =
    deleteFrom(this::delete, DbMHelpItem, completer)

fun DbMHelpItemMapper.deleteByPrimaryKey(id_: Long) =
    delete {
        where(id, isEqualTo(id_))
    }

fun DbMHelpItemMapper.insert(record: DbMHelpItemRecord) =
    insert(this::insert, record, DbMHelpItem) {
        map(id).toProperty("id")
        map(itemName).toProperty("itemName")
        map(helpPoint).toProperty("helpPoint")
        map(memo).toProperty("memo")
    }

fun DbMHelpItemMapper.insertMultiple(records: Collection<DbMHelpItemRecord>) =
    insertMultiple(this::insertMultiple, records, DbMHelpItem) {
        map(id).toProperty("id")
        map(itemName).toProperty("itemName")
        map(helpPoint).toProperty("helpPoint")
        map(memo).toProperty("memo")
    }

fun DbMHelpItemMapper.insertMultiple(vararg records: DbMHelpItemRecord) =
    insertMultiple(records.toList())

fun DbMHelpItemMapper.insertSelective(record: DbMHelpItemRecord) =
    insert(this::insert, record, DbMHelpItem) {
        map(id).toPropertyWhenPresent("id", record::id)
        map(itemName).toPropertyWhenPresent("itemName", record::itemName)
        map(helpPoint).toPropertyWhenPresent("helpPoint", record::helpPoint)
        map(memo).toPropertyWhenPresent("memo", record::memo)
    }

private val columnList = listOf(id, itemName, helpPoint, memo)

fun DbMHelpItemMapper.selectOne(completer: SelectCompleter) =
    selectOne(this::selectOne, columnList, DbMHelpItem, completer)

fun DbMHelpItemMapper.select(completer: SelectCompleter) =
    selectList(this::selectMany, columnList, DbMHelpItem, completer)

fun DbMHelpItemMapper.selectDistinct(completer: SelectCompleter) =
    selectDistinct(this::selectMany, columnList, DbMHelpItem, completer)

fun DbMHelpItemMapper.selectByPrimaryKey(id_: Long) =
    selectOne {
        where(id, isEqualTo(id_))
    }

fun DbMHelpItemMapper.update(completer: UpdateCompleter) =
    update(this::update, DbMHelpItem, completer)

fun KotlinUpdateBuilder.updateAllColumns(record: DbMHelpItemRecord) =
    apply {
        set(id).equalTo(record::id)
        set(itemName).equalTo(record::itemName)
        set(helpPoint).equalTo(record::helpPoint)
        set(memo).equalTo(record::memo)
    }

fun KotlinUpdateBuilder.updateSelectiveColumns(record: DbMHelpItemRecord) =
    apply {
        set(id).equalToWhenPresent(record::id)
        set(itemName).equalToWhenPresent(record::itemName)
        set(helpPoint).equalToWhenPresent(record::helpPoint)
        set(memo).equalToWhenPresent(record::memo)
    }

fun DbMHelpItemMapper.updateByPrimaryKey(record: DbMHelpItemRecord) =
    update {
        set(itemName).equalTo(record::itemName)
        set(helpPoint).equalTo(record::helpPoint)
        set(memo).equalTo(record::memo)
        where(id, isEqualTo(record::id))
    }

fun DbMHelpItemMapper.updateByPrimaryKeySelective(record: DbMHelpItemRecord) =
    update {
        set(itemName).equalToWhenPresent(record::itemName)
        set(helpPoint).equalToWhenPresent(record::helpPoint)
        set(memo).equalToWhenPresent(record::memo)
        where(id, isEqualTo(record::id))
    }