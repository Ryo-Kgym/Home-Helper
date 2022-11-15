/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.resolver.help_item

import graphql.kickstart.tools.GraphQLQueryResolver
import org.springframework.stereotype.Component


@Component
class SearchHelpItemResolver : GraphQLQueryResolver {

    /**
     * お手伝い項目を検索するクエリです。TODO
     * @param param 検索条件
     * @return お手伝い項目
     */
    fun searchHelpItem(param: SearchHelpItemParam): List<String> {
        return listOf("TODO")
    }
}

data class SearchHelpItemParam(
    val pointFrom: Int?,
    val pointTo: Int?,
)