/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.persistence.database.mysql.user.search

import org.apache.ibatis.annotations.Mapper

@Mapper
interface SearchUserMapper {

    fun search(param: SearchUserParam): List<SearchUserResult>
}