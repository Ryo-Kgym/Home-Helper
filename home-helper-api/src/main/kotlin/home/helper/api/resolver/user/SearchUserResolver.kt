/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.resolver.user

import java.time.format.DateTimeFormatter
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

    companion object {
        private val DTF = DateTimeFormatter.ofPattern("yyyy-MM-dd")
    }

    fun users(param: SearchUserParam): List<UserGqo> {
        val criteria = SearchUserCriteria(
            userId = param.userId?.let { UserId(it) },
        )
        val output = searchUserGateway.search(criteria)

        return output.map {
            UserGqo(
                id = it.userId.id,
                name = it.getNameWithSuffix(),
                currentPoint = it.currentPoint.value,
                lastHelp = DTF.format(it.lastHelpDateTime),
            )
        }.toList()
    }

    fun user(userId: String): UserGqo? {
        val param = SearchUserParam(
            userId = userId,
        )

        return users(param).firstOrNull()
    }
}

data class SearchUserParam(
    val userId: String? = null,
)
