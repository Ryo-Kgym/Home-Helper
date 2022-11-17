/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.resolver.help_point

import graphql.kickstart.tools.GraphQLMutationResolver
import home.helper.api.resolver.help_item.HelpItem as HelpItemGqo
import home.helper.core.domain.model.help_item.HelpItem
import home.helper.core.dto.help_point.SearchHelpPointEarnedCriteria
import home.helper.core.gateway.help_point.SearchHelpPointEarnedAchievementGateway
import org.springframework.stereotype.Component
import java.time.LocalDate

@Component
class SearchHelpPointMutationResolver(
    private val searchHelpPointEarnedAchievementGateway: SearchHelpPointEarnedAchievementGateway,
) : GraphQLMutationResolver {

    /**
     * お手伝いポイント獲得実績を検索するミューテーションです。
     * @param param 検索条件
     * @return お手伝いポイント獲得実績
     */
    fun searchHelpPoint(param: SearchHelpPointParam): List<SearchHelpPointViewModel> {
        val criteria = SearchHelpPointEarnedCriteria()
        val output = searchHelpPointEarnedAchievementGateway.search(criteria)

        return output.map {
            SearchHelpPointViewModel(
                id = it.achievementId.id,
                userId = it.userId.id,
                earnedDate = it.earnedDate,
                earnedPoint = it.earnedPoint.value,
                items = it.helpItemList.map(::refillHelpItem).toList(),
            )
        }.toList()
    }

    private fun refillHelpItem(s: HelpItem): HelpItemGqo {
        return HelpItemGqo(
            id = s.helpItemId.id,
            name = s.name,
            point = s.helpPoint.value,
            memo = s.memo,
        )
    }
}

data class SearchHelpPointParam(
    val userId: Long,
)

data class SearchHelpPointViewModel(
    val id: Long,
    val userId: Long,
    val earnedDate: LocalDate,
    val earnedPoint: Long,
    val items: List<HelpItemGqo>,
)

