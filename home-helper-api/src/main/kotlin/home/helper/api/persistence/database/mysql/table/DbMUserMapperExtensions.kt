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
import home.helper.api.persistence.database.mysql.table.DbMUserDynamicSqlSupport.DbMUser
import home.helper.api.persistence.database.mysql.table.DbMUserDynamicSqlSupport.DbMUser.id
import home.helper.api.persistence.database.mysql.table.DbMUserDynamicSqlSupport.DbMUser.name
import home.helper.api.persistence.database.mysql.table.DbMUserDynamicSqlSupport.DbMUser.nameSuffix

fun DbMUserMapper.count(completer: CountCompleter) =
    countFrom(this::count, DbMUser, completer)

fun DbMUserMapper.delete(completer: DeleteCompleter) =
    deleteFrom(this::delete, DbMUser, completer)

fun DbMUserMapper.deleteByPrimaryKey(id_: String) =
    delete {
        where(id, isEqualTo(id_))
    }

fun DbMUserMapper.insert(record: DbMUserRecord) =
    insert(this::insert, record, DbMUser) {
        map(id).toProperty("id")
        map(name).toProperty("name")
        map(nameSuffix).toProperty("nameSuffix")
    }

fun DbMUserMapper.insertMultiple(records: Collection<DbMUserRecord>) =
    insertMultiple(this::insertMultiple, records, DbMUser) {
        map(id).toProperty("id")
        map(name).toProperty("name")
        map(nameSuffix).toProperty("nameSuffix")
    }

fun DbMUserMapper.insertMultiple(vararg records: DbMUserRecord) =
    insertMultiple(records.toList())

fun DbMUserMapper.insertSelective(record: DbMUserRecord) =
    insert(this::insert, record, DbMUser) {
        map(id).toPropertyWhenPresent("id", record::id)
        map(name).toPropertyWhenPresent("name", record::name)
        map(nameSuffix).toPropertyWhenPresent("nameSuffix", record::nameSuffix)
    }

private val columnList = listOf(id, name, nameSuffix)

fun DbMUserMapper.selectOne(completer: SelectCompleter) =
    selectOne(this::selectOne, columnList, DbMUser, completer)

fun DbMUserMapper.select(completer: SelectCompleter) =
    selectList(this::selectMany, columnList, DbMUser, completer)

fun DbMUserMapper.selectDistinct(completer: SelectCompleter) =
    selectDistinct(this::selectMany, columnList, DbMUser, completer)

fun DbMUserMapper.selectByPrimaryKey(id_: String) =
    selectOne {
        where(id, isEqualTo(id_))
    }

fun DbMUserMapper.update(completer: UpdateCompleter) =
    update(this::update, DbMUser, completer)

fun KotlinUpdateBuilder.updateAllColumns(record: DbMUserRecord) =
    apply {
        set(id).equalTo(record::id)
        set(name).equalTo(record::name)
        set(nameSuffix).equalTo(record::nameSuffix)
    }

fun KotlinUpdateBuilder.updateSelectiveColumns(record: DbMUserRecord) =
    apply {
        set(id).equalToWhenPresent(record::id)
        set(name).equalToWhenPresent(record::name)
        set(nameSuffix).equalToWhenPresent(record::nameSuffix)
    }

fun DbMUserMapper.updateByPrimaryKey(record: DbMUserRecord) =
    update {
        set(name).equalTo(record::name)
        set(nameSuffix).equalTo(record::nameSuffix)
        where(id, isEqualTo(record::id))
    }

fun DbMUserMapper.updateByPrimaryKeySelective(record: DbMUserRecord) =
    update {
        set(name).equalToWhenPresent(record::name)
        set(nameSuffix).equalToWhenPresent(record::nameSuffix)
        where(id, isEqualTo(record::id))
    }