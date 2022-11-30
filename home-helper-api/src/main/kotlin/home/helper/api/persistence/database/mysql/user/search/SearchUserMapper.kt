/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.persistence.database.mysql.user.search

import home.helper.api.persistence.database.mysql.table.DbMUserRecord
import org.apache.ibatis.annotations.Mapper

@Mapper
interface SearchUserMapper {

    fun search(param: SearchUserParam): List<DbMUserRecord>
}