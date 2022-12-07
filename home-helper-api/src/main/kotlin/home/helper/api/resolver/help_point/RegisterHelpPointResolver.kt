/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.resolver.help_point

import org.springframework.stereotype.Component
import graphql.kickstart.tools.GraphQLMutationResolver
import home.helper.core.domain.model.help_item.HelpItem
import home.helper.core.domain.model.help_item.MultipleHelpItem
import home.helper.core.domain.model.user.UserId
import home.helper.core.domain.use_case.help_point.RegisterHelpPointUseCase
import home.helper.core.dto.help_point.RegisterHelpPointInput

@Component
class RegisterHelpPointResolver(
    private val registerHelpPointUseCase: RegisterHelpPointUseCase,
) : GraphQLMutationResolver {

    /**
     * お手伝いポイントを登録します。
     * @param param 登録内容
     * @return 登録メッセージ
     */
    fun registerHelpPoint(param: RegisterHelpPointParam): List<String> {
        val input = RegisterHelpPointInput(
            multipleHelpItems = param.details.map(::refill).toList(),
            userId = UserId(param.userId),
        )
        val output = registerHelpPointUseCase.register(input)

        return output.messageList.map { it.message }.toList()
    }

    private fun refill(gql: RegisterHelpPointDetail): MultipleHelpItem {
        return MultipleHelpItem(
            helpItem = HelpItem(id = gql.id, name = "", point = gql.point),
            count = gql.count,
        )
    }
}

data class RegisterHelpPointParam(
    val details: List<RegisterHelpPointDetail>,
    val userId: String,
)

data class RegisterHelpPointDetail(
    val id: String,
    val point: Int,
    val count: Int,
)