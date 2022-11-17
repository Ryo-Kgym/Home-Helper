/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.persistence.database.mysql.help_item.register

import home.helper.api.persistence.database.mysql.table.DbMHelpItemMapper
import home.helper.api.persistence.database.mysql.table.select
import home.helper.core.domain.model.help_item.HelpItem
import home.helper.core.domain.model.help_item.HelpItemId
import home.helper.core.domain.model.help_point.HelpPoint
import home.helper.core.dto.help_item.SearchHelpItemCriteria
import home.helper.core.gateway.help_item.SearchHelpItemGateway
import org.springframework.stereotype.Repository

@Repository
class SearchHelpItemRepository(
    private val dbMHelpItemMapper: DbMHelpItemMapper,
) : SearchHelpItemGateway {

    override fun search(criteria: SearchHelpItemCriteria): List<HelpItem> {
        return dbMHelpItemMapper.select { }
            .map {
                HelpItem(
                    helpItemId = HelpItemId(it.id!!),
                    name = it.itemName!!,
                    helpPoint = HelpPoint(it.helpPoint!!),
                    memo = it.memo,
                )
            }
            .toList()
    }
}