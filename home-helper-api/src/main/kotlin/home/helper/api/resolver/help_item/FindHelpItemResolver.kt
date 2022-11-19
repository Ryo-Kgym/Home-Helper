/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.resolver.help_item

import graphql.kickstart.tools.GraphQLQueryResolver
import home.helper.core.domain.model.help_item.HelpItemId
import home.helper.core.gateway.help_item.SearchHelpItemGateway
import org.springframework.stereotype.Component
import home.helper.api.resolver.help_item.HelpItem as HelpItemGqo

@Component
class FindHelpItemResolver(
    private val searchHelpItemGateway: SearchHelpItemGateway
) : GraphQLQueryResolver {

    /**
     * お手伝い項目を取得するクエリです。
     * @param id ID
     * @return お手伝い項目
     */
    fun findHelpItem(id: Long): HelpItemGqo? {

        return searchHelpItemGateway.findBy(HelpItemId(id))?.let {
            HelpItemGqo(
                id = id,
                name = it.name,
                point = it.helpPoint.value,
                memo = it.memo,
            )
        }
    }
}
