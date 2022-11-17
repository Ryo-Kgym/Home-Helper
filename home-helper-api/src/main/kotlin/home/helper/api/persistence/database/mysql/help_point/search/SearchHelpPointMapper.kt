/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.persistence.database.mysql.help_point.search

import org.apache.ibatis.annotations.Mapper

@Mapper
interface SearchHelpPointMapper {

    fun search(criteria: SearchHelpPointParam): List<SearchHelpPointResult>
}