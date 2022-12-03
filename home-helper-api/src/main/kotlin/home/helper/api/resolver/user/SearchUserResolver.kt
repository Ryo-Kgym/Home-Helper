/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.resolver.user

import home.helper.api.resolver.user.User as UserGqo
import org.springframework.stereotype.Component
import graphql.kickstart.tools.GraphQLQueryResolver
import home.helper.core.domain.model.user.UserId
import home.helper.core.dto.user.SearchUserCriteria
import home.helper.core.gateway.user.SearchUserGateway

@Component
class SearchUserResolver(
    private val searchUserGateway: SearchUserGateway,
) : GraphQLQueryResolver {

    // TODO currentPoint and lastHelp
    fun users(param: SearchUserParam): List<UserGqo> {
        val criteria = SearchUserCriteria(
            userId = param.userId?.let { UserId(it) },
        )
        val output = searchUserGateway.search(criteria)

        return output.map {
            UserGqo(
                id = it.userId.id,
                name = it.getNameWithSuffix(),
                currentPoint = 30000,
                lastHelp = "2022-12-01",
            )
        }.toList()
    }

    // TODO currentPoint and lastHelp
    fun user(userId: String): UserGqo? {
        val param = SearchUserParam(
            userId = userId,
        )

        return users(param)[0]
    }
}

data class SearchUserParam(
    val userId: String? = null,
)
