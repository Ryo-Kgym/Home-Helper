/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.resolver.exchange_item

import org.springframework.stereotype.Component
import graphql.kickstart.tools.GraphQLQueryResolver
import home.helper.core.domain.model.exchange_item.ExchangeItemId
import home.helper.core.dto.SearchExchangeItemCriteria
import home.helper.core.gateway.exchange_item.SearchExchangeItemGateway
import home.helper.api.resolver.exchange_item.ExchangeItem as ExchangeItemGqo

@Component
class SearchExchangeItemResolver(
    private val searchExchangeItemGateway: SearchExchangeItemGateway
) : GraphQLQueryResolver {

    /**
     * 交換品を検索します。
     * @param param 検索条件
     * @return 交換品
     */
    fun exchangeItems(param: SearchExchangeItemParam): List<ExchangeItemGqo> {
        val criteria = SearchExchangeItemCriteria(
            exchangeItemId = param.id?.let { ExchangeItemId(it) },
        )

        val output = searchExchangeItemGateway.search(criteria)
        return output.map {
            ExchangeItemGqo(
                id = it.exchangeItemId.id,
                name = it.name,
                point = it.exchangePoint.point,
            )
        }
    }
}

data class SearchExchangeItemParam(
    val id: String? = null,
)
