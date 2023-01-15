/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.resolver.help_point

import org.springframework.stereotype.Component
import graphql.kickstart.tools.GraphQLQueryResolver
import home.helper.core.domain.model.user.UserId
import home.helper.core.dto.help_point.SearchHelpPointEarnedCriteria
import home.helper.core.gateway.help_point.SearchHelpPointEarnedAchievementGateway
import home.helper.api.resolver.help_point.HelpPointEarnedAchievement as HelpPointEarnedAchievementGqo

@Component
class SearchHelpPointEarnedAchievementResolver(
    private val searchHelpPointEarnedAchievementGateway: SearchHelpPointEarnedAchievementGateway,
) : GraphQLQueryResolver {

    /**
     * お手伝いポイント獲得実績を検索します。
     * @param param 検索条件
     * @return お手伝いポイント獲得実績
     */
    fun helpPointEarnedAchievement(param: SearchHelpPointParam): List<HelpPointEarnedAchievementGqo> {
        val criteria = SearchHelpPointEarnedCriteria(
            userId = UserId.valueOf(param.userId),
        )
        val output = searchHelpPointEarnedAchievementGateway.search(criteria)

        return output.map {
            HelpPointEarnedAchievementGqo(
                id = it.achievementId.id,
                userId = it.userId.id,
                earnedDate = it.earnedDate,
                earnedPoint = it.earnedPoint.value,
            )
        }
    }
}

data class SearchHelpPointParam(
    val userId: String,
)
