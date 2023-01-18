/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.api.resolver.help_point.exchange

import org.springframework.stereotype.Component
import graphql.kickstart.tools.GraphQLQueryResolver
import home.helper.core.domain.model.user.UserId
import home.helper.core.gateway.help_point.SearchHelpPointExchangedAchievementGateway
import home.helper.api.resolver.help_point.exchange.HelpPointExchangedAchievement as HelpPointExchangedAchievementGql

@Component
class HelpPointExchangedAchievementByUserIdResolver(
    private val searchHelpPointExchangedAchievementGateway: SearchHelpPointExchangedAchievementGateway,
) : GraphQLQueryResolver {

    /**
     * お手伝いポイント交換実績を検索します。
     * @param userId ユーザID
     * @return お手伝いポイント交換実績
     */
    fun helpPointExchangedAchievementByUserId(userId: String): List<HelpPointExchangedAchievementGql> {
        val output = searchHelpPointExchangedAchievementGateway.findBy(
            userId = UserId.valueOf(userId),
        )

        return output.map {
            HelpPointExchangedAchievementGql(
                userId = it.userId.id,
                exchangeItemId = it.exchangeItemId.id,
                exchangeCount = it.exchangeCount,
                exchangeTotalPoint = it.exchangeTotalPoint.point,
                exchangedDatetime = it.exchangedDatetime,
            )
        }
    }
}
