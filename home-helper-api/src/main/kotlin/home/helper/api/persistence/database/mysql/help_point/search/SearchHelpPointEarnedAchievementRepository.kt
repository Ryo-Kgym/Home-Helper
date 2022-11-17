/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.persistence.database.mysql.help_point.search

import home.helper.core.domain.model.help.HelpItem
import home.helper.core.domain.model.help.HelpItemId
import home.helper.core.domain.model.help.HelpPoint
import home.helper.core.domain.model.help_point.earned.HelpPointEarnedAchievement
import home.helper.core.domain.model.help_point.earned.HelpPointEarnedAchievementId
import home.helper.core.domain.model.user.UserId
import home.helper.core.dto.help_point.earned.SearchHelpPointEarnedCriteria
import home.helper.core.gateway.help_point.earned.SearchHelpPointEarnedAchievementGateway
import org.springframework.stereotype.Repository

@Repository
class SearchHelpPointEarnedAchievementRepository(
    private val searchHelpPointEarnedDetailMapper: SearchHelpPointMapper,
) : SearchHelpPointEarnedAchievementGateway {

    override fun search(criteria: SearchHelpPointEarnedCriteria): List<HelpPointEarnedAchievement> {
        val param = SearchHelpPointParam()

        return searchHelpPointEarnedDetailMapper.search(param)
            .map {
                HelpPointEarnedAchievement(
                    achievementId = HelpPointEarnedAchievementId(it.id!!),
                    userId = UserId(it.userId!!),
                    earnedDate = it.earnedDate!!,
                    earnedPoint = HelpPoint(it.earnedPoint!!),
                    helpItemList = it.detailList?.map(::refillHelpItem) ?: listOf()
                )
            }.toList()
    }

    private fun refillHelpItem(s: HelpItemResult): HelpItem {
        return HelpItem(
            helpItemId = HelpItemId(s.itemId!!),
            name = s.itemName!!,
            helpPoint = HelpPoint(s.helpPoint!!),
            memo = s.memo,
        )
    }
}