/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.resolver.help_point

import org.springframework.stereotype.Component
import graphql.kickstart.tools.GraphQLMutationResolver
import home.helper.core.domain.model.exchange_item.ExchangeItem
import home.helper.core.domain.model.exchange_item.MultipleExchangeItem
import home.helper.core.domain.model.user.UserId
import home.helper.core.domain.use_case.help_point.ExchangeHelpPointUseCase
import home.helper.core.dto.help_point.ExchangeHelpPointInput

@Component
class ExchangeHelpPointResolver(
    private val exchangeHelpPointUseCase: ExchangeHelpPointUseCase,
) : GraphQLMutationResolver {

    /**
     * お手伝いポイントを交換します。
     * @param param 交換内容
     * @return 登録メッセージ
     */
    fun exchangeHelpPoint(param: ExchangeHelpPointParam): List<String> {
        val input = ExchangeHelpPointInput(
            exchangeItems = param.details.map(::refill).toList(),
            userId = UserId(param.userId),
        )
        val output = exchangeHelpPointUseCase.register(input)

        return output.messageList.map { it.message }.toList()
    }

    private fun refill(gql: ExchangeHelpPointDetail): MultipleExchangeItem {
        return MultipleExchangeItem(
            exchangeItem = ExchangeItem(id = gql.id, name = "", point = gql.point),
            count = gql.count,
        )
    }
}

data class ExchangeHelpPointParam(
    val details: List<ExchangeHelpPointDetail>,
    val userId: String,
)

data class ExchangeHelpPointDetail(
    val id: String,
    val point: Int,
    val count: Int,
)