/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.resolver.help_point

import org.springframework.stereotype.Component
import graphql.kickstart.tools.GraphQLResolver
import home.helper.core.domain.model.help_point.earned.HelpPointEarnedAchievementId
import home.helper.core.dto.help_item.SearchHelpItemCriteria
import home.helper.core.gateway.help_item.SearchHelpItemGateway
import home.helper.api.resolver.help_item.HelpItem as HelpItemGqo

@Component
class HelpItemsByEarnedAchievementIdResolver(
    private val searchHelpItemGateway: SearchHelpItemGateway,
) : GraphQLResolver<HelpPointEarnedAchievement> {

    /**
     * お手伝いポイント獲得実績IDに紐つくお手伝い項目を取得します。
     * @param param お手伝いポイント獲得実績
     * @return お手伝い項目
     */
    fun helpItemsByEarnedAchievementId(param: HelpPointEarnedAchievement): List<HelpItemGqo> {
        return searchHelpItemGateway.search(SearchHelpItemCriteria(
            earnedAchievementId = HelpPointEarnedAchievementId.valueOf(param.id)
        )).map {
            HelpItemGqo(
                id = it.helpItemId.id,
                name = it.name,
                point = it.helpPoint.value,
                memo = it.memo,
            )
        }
    }
}
