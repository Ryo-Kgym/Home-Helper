/*
 * Auto-generated file. Created by MyBatis Generator
 */
@file:Suppress("DEPRECATION")

package home.helper.api.persistence.database.mysql.table

import home.helper.api.persistence.database.mysql.table.DbMHelpItemDynamicSqlSupport.DbMHelpItem
import home.helper.api.persistence.database.mysql.table.DbMHelpItemDynamicSqlSupport.DbMHelpItem.id
import home.helper.api.persistence.database.mysql.table.DbMHelpItemDynamicSqlSupport.DbMHelpItem.memo
import home.helper.api.persistence.database.mysql.table.DbMHelpItemDynamicSqlSupport.DbMHelpItem.name
import home.helper.api.persistence.database.mysql.table.DbMHelpItemDynamicSqlSupport.DbMHelpItem.point
import org.mybatis.dynamic.sql.SqlBuilder.isEqualTo
import org.mybatis.dynamic.sql.util.kotlin.*
import org.mybatis.dynamic.sql.util.kotlin.mybatis3.*

fun DbMHelpItemMapper.count(completer: CountCompleter) =
    countFrom(this::count, DbMHelpItem, completer)

fun DbMHelpItemMapper.delete(completer: DeleteCompleter) =
    deleteFrom(this::delete, DbMHelpItem, completer)

fun DbMHelpItemMapper.deleteByPrimaryKey(id_: String) =
    delete {
        where(id, isEqualTo(id_))
    }

fun DbMHelpItemMapper.insert(record: DbMHelpItemRecord) =
    insert(this::insert, record, DbMHelpItem) {
        map(id).toProperty("id")
        map(name).toProperty("name")
        map(point).toProperty("point")
        map(memo).toProperty("memo")
    }

fun DbMHelpItemMapper.insertMultiple(records: Collection<DbMHelpItemRecord>) =
    insertMultiple(this::insertMultiple, records, DbMHelpItem) {
        map(id).toProperty("id")
        map(name).toProperty("name")
        map(point).toProperty("point")
        map(memo).toProperty("memo")
    }

fun DbMHelpItemMapper.insertMultiple(vararg records: DbMHelpItemRecord) =
    insertMultiple(records.toList())

fun DbMHelpItemMapper.insertSelective(record: DbMHelpItemRecord) =
    insert(this::insert, record, DbMHelpItem) {
        map(id).toPropertyWhenPresent("id", record::id)
        map(name).toPropertyWhenPresent("name", record::name)
        map(point).toPropertyWhenPresent("point", record::point)
        map(memo).toPropertyWhenPresent("memo", record::memo)
    }

private val columnList = listOf(id, name, point, memo)

fun DbMHelpItemMapper.selectOne(completer: SelectCompleter) =
    selectOne(this::selectOne, columnList, DbMHelpItem, completer)

fun DbMHelpItemMapper.select(completer: SelectCompleter) =
    selectList(this::selectMany, columnList, DbMHelpItem, completer)

fun DbMHelpItemMapper.selectDistinct(completer: SelectCompleter) =
    selectDistinct(this::selectMany, columnList, DbMHelpItem, completer)

fun DbMHelpItemMapper.selectByPrimaryKey(id_: String) =
    selectOne {
        where(id, isEqualTo(id_))
    }

fun DbMHelpItemMapper.update(completer: UpdateCompleter) =
    update(this::update, DbMHelpItem, completer)

fun KotlinUpdateBuilder.updateAllColumns(record: DbMHelpItemRecord) =
    apply {
        set(id).equalTo(record::id)
        set(name).equalTo(record::name)
        set(point).equalTo(record::point)
        set(memo).equalTo(record::memo)
    }

fun KotlinUpdateBuilder.updateSelectiveColumns(record: DbMHelpItemRecord) =
    apply {
        set(id).equalToWhenPresent(record::id)
        set(name).equalToWhenPresent(record::name)
        set(point).equalToWhenPresent(record::point)
        set(memo).equalToWhenPresent(record::memo)
    }

fun DbMHelpItemMapper.updateByPrimaryKey(record: DbMHelpItemRecord) =
    update {
        set(name).equalTo(record::name)
        set(point).equalTo(record::point)
        set(memo).equalTo(record::memo)
        where(id, isEqualTo(record::id))
    }

fun DbMHelpItemMapper.updateByPrimaryKeySelective(record: DbMHelpItemRecord) =
    update {
        set(name).equalToWhenPresent(record::name)
        set(point).equalToWhenPresent(record::point)
        set(memo).equalToWhenPresent(record::memo)
        where(id, isEqualTo(record::id))
    }