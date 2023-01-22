/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.api.persistence.database.mysql.help_point.search

import org.mybatis.dynamic.sql.select.render.SelectStatementProvider
import org.springframework.stereotype.Repository
import home.helper.api.persistence.database.mysql.table.DbHelpPointExchangedAchievementMapper
import home.helper.core.domain.model.exchange_item.ExchangeItemId
import home.helper.core.domain.model.exchange_item.ExchangePoint
import home.helper.core.domain.model.help_point.exchanged.HelpPointExchangedAchievement
import home.helper.core.domain.model.user.UserId
import home.helper.core.gateway.help_point.SearchHelpPointExchangedAchievementGateway

@Repository
class SearchHelpPointExchangedAchievementRepository(
    private val dbHelpPointExchangedAchievementMapper: DbHelpPointExchangedAchievementMapper,
) : SearchHelpPointExchangedAchievementGateway {

    override fun findBy(userId: UserId): List<HelpPointExchangedAchievement> {
        val provider = object : SelectStatementProvider {
            override fun getParameters(): MutableMap<String, Any> {
                return mutableMapOf(
                    "userId" to userId.id,
                )
            }

            override fun getSelectStatement(): String {
                return "select * from help_point_exchanged_achievement " +
                        "where user_id = #{parameters.userId} " +
                        "order by exchanged_datetime desc, id"
            }
        }

        return dbHelpPointExchangedAchievementMapper.selectMany(provider)
            .map {
                HelpPointExchangedAchievement(
                    userId = UserId.valueOf(it.userId!!),
                    exchangeItemId = ExchangeItemId.valueOf(it.exchangeItemId!!),
                    exchangeCount = it.exchangeCount!!,
                    exchangeTotalPoint = ExchangePoint.valueOf(it.exchangeTotalPoint!!),
                    exchangedDatetime = it.exchangedDatetime!!
                )
            }
    }
}