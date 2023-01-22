/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.persistence.database.mysql.help_point.search

import java.time.LocalDate
import org.mybatis.dynamic.sql.select.render.SelectStatementProvider
import org.springframework.stereotype.Repository
import home.helper.api.persistence.database.mysql.table.DbHelpPointEarnedAchievementMapper
import home.helper.core.domain.model.help_point.HelpPoint
import home.helper.core.domain.model.help_point.earned.HelpPointEarnedAchievement
import home.helper.core.domain.model.help_point.earned.HelpPointEarnedAchievementId
import home.helper.core.domain.model.user.UserId
import home.helper.core.dto.help_point.SearchHelpPointEarnedCriteria
import home.helper.core.gateway.help_point.SearchHelpPointEarnedAchievementGateway

@Repository
class SearchHelpPointEarnedAchievementRepository(
    private val dbHelpPointEarnedAchievementMapper: DbHelpPointEarnedAchievementMapper,
) : SearchHelpPointEarnedAchievementGateway {

    override fun search(criteria: SearchHelpPointEarnedCriteria): List<HelpPointEarnedAchievement> {

        return dbHelpPointEarnedAchievementMapper.selectMany(
            generateProvider(criteria)
        )
            .map {
                HelpPointEarnedAchievement(
                    achievementId = HelpPointEarnedAchievementId.valueOf(it.id!!),
                    userId = UserId(it.userId!!),
                    earnedDate = LocalDate.from(it.earnedDatetime!!),
                    earnedPoint = HelpPoint(it.earnedPoint!!),
                )
            }
    }

    private fun generateProvider(criteria: SearchHelpPointEarnedCriteria) =
        object : SelectStatementProvider {
            override fun getParameters(): MutableMap<String, Any> {
                return mutableMapOf(
                    "userId" to criteria.userId.id
                )
            }

            override fun getSelectStatement(): String {
                return "select * from help_point_earned_achievement " +
                        "where user_id = #{parameters.userId} " +
                        "order by earned_datetime desc, id"
            }
        }
}