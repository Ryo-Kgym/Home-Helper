/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.resolver.help_item

import org.springframework.stereotype.Component
import graphql.kickstart.tools.GraphQLQueryResolver
import home.helper.core.domain.model.help_item.HelpItemId
import home.helper.core.dto.help_item.SearchHelpItemCriteria
import home.helper.core.gateway.help_item.SearchHelpItemGateway
import home.helper.api.resolver.help_item.HelpItem as HelpItemGqo

@Component
class SearchHelpItemResolver(
    private val searchHelpItemGateway: SearchHelpItemGateway
) : GraphQLQueryResolver {

    /**
     * お手伝い項目を検索します。
     * @param param 検索条件
     * @return お手伝い項目
     */
    fun helpItems(param: SearchHelpItemParam): List<HelpItemGqo> {
        val criteria = SearchHelpItemCriteria(
            helpItemId = param.id?.let { HelpItemId(it) },
        )

        val output = searchHelpItemGateway.search(criteria)
        return output.map {
            HelpItemGqo(
                id = it.helpItemId.id,
                name = it.name,
                point = it.helpPoint.value,
                memo = it.memo,
            )
        }
    }

    /**
     * お手伝い項目を取得するクエリです。
     * @param id ID
     * @return お手伝い項目
     */
    fun helpItem(id: Long): HelpItemGqo? {
        val param = SearchHelpItemParam(
            id = id,
        )
        return helpItems(param).firstOrNull()
    }
}

data class SearchHelpItemParam(
    val id: Long? = null,
    val pointFrom: Int? = null,
    val pointTo: Int? = null,
)
