/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.resolver.exchange_item

import org.springframework.stereotype.Component
import graphql.kickstart.tools.GraphQLResolver
import home.helper.core.domain.model.exchange_item.ExchangeItemId
import home.helper.core.gateway.exchange_item.SearchExchangeItemGateway
import home.helper.api.resolver.exchange_item.ExchangeItem as ExchangeItemGqo
import home.helper.api.resolver.help_point.exchange.HelpPointExchangedAchievement as HelpPointExchangedAchievementGql

@Component
class ExchangeItemByIdResolver(
    private val searchExchangeItemGateway: SearchExchangeItemGateway
) : GraphQLResolver<HelpPointExchangedAchievementGql> {

    /**
     * 交換品を取得する。
     * @param param お手伝いポイント交換実績
     * @return 交換品
     */
    fun exchangeItemById(param: HelpPointExchangedAchievementGql): ExchangeItemGqo {
        val exchangeItem = searchExchangeItemGateway
            .findBy(ExchangeItemId.valueOf(param.exchangeItemId))!!

        return ExchangeItemGqo(
            id = exchangeItem.exchangeItemId.id,
            name = exchangeItem.name,
            point = exchangeItem.exchangePoint.point,
        )
    }
}
