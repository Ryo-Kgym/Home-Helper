/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.persistence.database.mysql.help_item.search

import home.helper.api.persistence.database.mysql.table.DbMHelpItemRecord
import home.helper.core.domain.model.help_item.HelpItemId
import org.apache.ibatis.annotations.Mapper

@Mapper
interface SearchHelpItemMapper {

    fun search(param: SearchHelpItemParam): List<DbMHelpItemRecord>
}