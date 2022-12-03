/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.resolver.help_item

import graphql.kickstart.tools.GraphQLMutationResolver
import home.helper.core.domain.model.help_point.HelpPoint
import home.helper.core.domain.use_case.help_item.RegisterHelpItemUseCase
import home.helper.core.dto.help_item.RegisterHelpItemInput
import org.springframework.stereotype.Component

@Component
class RegisterHelpItemMutationResolver(
    private val registerHelpItemUseCase: RegisterHelpItemUseCase,
) : GraphQLMutationResolver {

    /**
     * お手伝い項目を登録するミューテーションです。
     * @param param 登録内容
     * @return 登録メッセージ
     */
    fun registerHelpItem(param: RegisterHelpItemParam): List<String> {
        val input = RegisterHelpItemInput(
            helpItemName = param.name,
            helpPoint = HelpPoint(param.point),
            memo = param.memo,
        )
        val output = registerHelpItemUseCase.register(input)

        return output.messageList.map { it.message }.toList()
    }
}

data class RegisterHelpItemParam(
    val name: String,
    val point: Int,
    val memo: String?,
)