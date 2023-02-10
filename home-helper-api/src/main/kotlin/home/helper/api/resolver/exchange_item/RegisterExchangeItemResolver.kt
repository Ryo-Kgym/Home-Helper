/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.api.resolver.exchange_item

import org.springframework.stereotype.Component
import graphql.kickstart.tools.GraphQLMutationResolver
import home.helper.core.domain.model.exchange_item.ExchangePoint
import home.helper.core.domain.use_case.exchange_item.RegisterExchangeItemUseCase
import home.helper.core.dto.exchange_item.RegisterExchangeItemInput

@Component
class RegisterExchangeItemResolver(
    private val registerExchangeItemUseCase: RegisterExchangeItemUseCase,
) : GraphQLMutationResolver {

    /**
     * 交換品を登録します。
     * @param param 登録内容
     * @return 登録メッセージ
     */
    fun registerExchangeItem(param: RegisterExchangeItemParam): List<String> {
        val input = RegisterExchangeItemInput(
            exchangeItemName = param.name,
            exchangePoint = ExchangePoint.valueOf(param.point),
            memo = param.memo,
        )
        val output = registerExchangeItemUseCase.register(input)

        return output.messageList.map { it.message }.toList()
    }
}

data class RegisterExchangeItemParam(
    val name: String,
    val point: Int,
    val memo: String?,
)