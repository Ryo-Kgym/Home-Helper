/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.resolver.help_point

import org.springframework.stereotype.Component
import graphql.kickstart.tools.GraphQLResolver
import home.helper.core.domain.model.help_point.earned.HelpPointEarnedAchievementId
import home.helper.core.gateway.help_point.SearchHelpPointEarnedDetailGateway
import home.helper.api.resolver.help_point.HelpPointEarnedDetail as HelpPointEarnedDetailGql

@Component
class HelpPointEarnedDetailByEarnedAchievementIdResolver(
    private val searchHelpPointEarnedDetailGateway: SearchHelpPointEarnedDetailGateway,
) : GraphQLResolver<HelpPointEarnedAchievement> {

    /**
     * お手伝いポイント獲得実績IDに紐つくお手伝いポイント獲得明細を取得します。
     * @param param お手伝いポイント獲得実績
     * @return お手伝いポイント獲得明細
     */
    fun helpPointEarnedDetailByEarnedAchievementId(param: HelpPointEarnedAchievement)
            : List<HelpPointEarnedDetailGql> {
        return searchHelpPointEarnedDetailGateway.findBy(HelpPointEarnedAchievementId.valueOf(param.id)).map {
            HelpPointEarnedDetailGql(
                earnedAchievementId = it.earnedAchievementId.id,
                helpItemId = it.helpItemId.id,
                helpItemCount = it.helpItemCount,
                helpItemTotalPoint = it.helpItemTotalPoint.value,
            )
        }
    }
}
