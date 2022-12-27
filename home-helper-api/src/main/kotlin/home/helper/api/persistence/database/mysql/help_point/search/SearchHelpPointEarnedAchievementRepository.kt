/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.persistence.database.mysql.help_point.search

import org.springframework.stereotype.Repository
import home.helper.core.domain.model.help_point.HelpPoint
import home.helper.core.domain.model.help_point.earned.HelpPointEarnedAchievement
import home.helper.core.domain.model.help_point.earned.HelpPointEarnedAchievementId
import home.helper.core.domain.model.user.UserId
import home.helper.core.dto.help_point.SearchHelpPointEarnedCriteria
import home.helper.core.gateway.help_point.SearchHelpPointEarnedAchievementGateway

@Repository
class SearchHelpPointEarnedAchievementRepository(
    private val searchHelpPointMapper: SearchHelpPointMapper,
) : SearchHelpPointEarnedAchievementGateway {

    override fun search(criteria: SearchHelpPointEarnedCriteria): List<HelpPointEarnedAchievement> {
        val param = SearchHelpPointParam(
            userId = criteria.userId.id,
        )

        return searchHelpPointMapper.search(param)
            .map {
                HelpPointEarnedAchievement(
                    achievementId = HelpPointEarnedAchievementId(it.id!!),
                    userId = UserId(it.userId!!),
                    earnedDate = it.earnedDate!!,
                    earnedPoint = HelpPoint(it.earnedPoint!!),
                )
            }
    }
}