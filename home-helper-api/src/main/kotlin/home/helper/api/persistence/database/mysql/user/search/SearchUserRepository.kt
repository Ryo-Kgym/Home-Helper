/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.persistence.database.mysql.user.search

import home.helper.core.domain.model.user.User
import home.helper.core.domain.model.user.UserId
import home.helper.core.dto.user.SearchUserCriteria
import home.helper.core.gateway.user.SearchUserGateway
import org.springframework.stereotype.Repository
import home.helper.core.domain.model.help_point.HelpPoint

@Repository
class SearchUserRepository(
    private val searchUserMapper: SearchUserMapper,
) : SearchUserGateway {

    override fun search(criteria: SearchUserCriteria): List<User> {
        val param = SearchUserParam(
            id = criteria.userId?.id,
        )
        return searchUserMapper.search(param)
            .map {
                User(
                    id = it.id!!,
                    name = it.name!!,
                    nameSuffix = it.nameSuffix!!,
                    currentPoint = HelpPoint(it.point!!),
                    lastHelpDateTime = it.lastHelpDatetime!!
                )
            }
    }

    override fun findBy(userId: UserId): User? {
        val criteria = SearchUserCriteria(
            userId = userId,
        )
        return search(criteria).firstOrNull()
    }
}