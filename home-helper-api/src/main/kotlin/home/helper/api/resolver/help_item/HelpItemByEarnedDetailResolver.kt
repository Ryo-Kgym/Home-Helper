/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.api.resolver.help_item

import org.springframework.stereotype.Component
import graphql.kickstart.tools.GraphQLResolver
import home.helper.api.resolver.help_point.HelpPointEarnedDetail
import home.helper.core.domain.model.help_item.HelpItemId
import home.helper.core.dto.help_item.SearchHelpItemCriteria
import home.helper.core.gateway.help_item.SearchHelpItemGateway
import home.helper.api.resolver.help_item.HelpItem as HelpItemGqo

@Component
class HelpItemByEarnedDetailResolver(
    private val searchHelpItemGateway: SearchHelpItemGateway,
) : GraphQLResolver<HelpPointEarnedDetail> {

    /**
     * 獲得明細からお手伝い項目を取得します。
     * @param param お手伝いポイント獲得明細
     * @return お手伝い項目
     */
    fun helpItemByEarnedDetail(param: HelpPointEarnedDetail): HelpItemGqo {
        val criteria = SearchHelpItemCriteria(
            helpItemId = HelpItemId.valueOf(param.helpItemId),
        )
        val it = searchHelpItemGateway.search(criteria).first()
        return HelpItemGqo(
            id = it.helpItemId.id,
            name = it.name,
            point = it.helpPoint.value,
            memo = it.memo,
        )
    }
}