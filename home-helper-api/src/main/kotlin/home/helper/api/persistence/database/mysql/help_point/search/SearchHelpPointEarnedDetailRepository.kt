/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.api.persistence.database.mysql.help_point.search

import org.mybatis.dynamic.sql.select.render.SelectStatementProvider
import org.springframework.stereotype.Repository
import home.helper.api.persistence.database.mysql.table.DbHelpPointEarnedDetailMapper
import home.helper.core.domain.model.help_item.HelpItemId
import home.helper.core.domain.model.help_point.HelpPoint
import home.helper.core.domain.model.help_point.earned.HelpPointEarnedAchievementId
import home.helper.core.domain.model.help_point.earned.HelpPointEarnedDetail
import home.helper.core.gateway.help_point.SearchHelpPointEarnedDetailGateway

@Repository
class SearchHelpPointEarnedDetailRepository(
    private val dbHelpPointEarnedDetailMapper: DbHelpPointEarnedDetailMapper,
) : SearchHelpPointEarnedDetailGateway {
    override fun findBy(id: HelpPointEarnedAchievementId): List<HelpPointEarnedDetail> {
        val provider = object : SelectStatementProvider {
            override fun getParameters(): MutableMap<String, Any> {
                return mutableMapOf(
                    "earnedAchievementId" to id.id
                )
            }

            override fun getSelectStatement(): String {
                return "select " +
                        "    * " +
                        "from " +
                        "    help_point_earned_detail " +
                        "where " +
                        "    earned_achievement_id = #{parameters.earnedAchievementId}" +
                        "order by " +
                        "    earned_achievement_id"
            }
        }

        return dbHelpPointEarnedDetailMapper.selectMany(provider)
            .map {
                HelpPointEarnedDetail(
                    earnedAchievementId = HelpPointEarnedAchievementId.valueOf(it.earnedAchievementId!!),
                    helpItemId = HelpItemId.valueOf(it.helpItemId!!),
                    helpItemCount = it.helpItemCount!!,
                    helpItemTotalPoint = HelpPoint(it.helpItemTotalPoint!!)
                )
            }
    }
}