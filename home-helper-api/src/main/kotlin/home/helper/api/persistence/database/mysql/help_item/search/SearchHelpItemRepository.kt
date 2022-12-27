/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.persistence.database.mysql.help_item.search

import home.helper.core.domain.model.help_item.HelpItem
import home.helper.core.domain.model.help_item.HelpItemId
import home.helper.core.domain.model.help_point.HelpPoint
import home.helper.core.dto.help_item.SearchHelpItemCriteria
import home.helper.core.gateway.help_item.SearchHelpItemGateway
import org.springframework.stereotype.Repository

@Repository
class SearchHelpItemRepository(
    private val searchHelpItemMapper: SearchHelpItemMapper,
) : SearchHelpItemGateway {

    override fun search(criteria: SearchHelpItemCriteria): List<HelpItem> {
        val param = SearchHelpItemParam(
            id = criteria.helpItemId?.id,
            earnedAchievementId = criteria.earnedAchievementId?.id,
        )

        return searchHelpItemMapper.search(param)
            .map {
                HelpItem(
                    helpItemId = HelpItemId.valueOf(it.id!!),
                    name = it.name!!,
                    helpPoint = HelpPoint(it.point!!),
                    memo = it.memo,
                )
            }
    }

    override fun findBy(id: HelpItemId): HelpItem? {
        val criteria = SearchHelpItemCriteria(
            helpItemId = id,
        )

        return search(criteria).firstOrNull()
    }
}