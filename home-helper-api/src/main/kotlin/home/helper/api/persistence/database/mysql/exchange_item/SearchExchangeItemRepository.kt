/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.persistence.database.mysql.exchange_item

import org.mybatis.dynamic.sql.select.render.SelectStatementProvider
import org.springframework.stereotype.Repository
import home.helper.api.persistence.database.mysql.table.DbMExchangeItemMapper
import home.helper.core.domain.model.exchange_item.ExchangeItem
import home.helper.core.dto.SearchExchangeItemCriteria
import home.helper.core.gateway.exchange_item.SearchExchangeItemGateway

@Repository
class SearchExchangeItemRepository(
    private val dbMExchangeItemMapper: DbMExchangeItemMapper,
) : SearchExchangeItemGateway {

    override fun search(criteria: SearchExchangeItemCriteria): List<ExchangeItem> {
        val dbExchangeItems = dbMExchangeItemMapper.selectMany(object : SelectStatementProvider {
            override fun getParameters(): MutableMap<String, Any> {
                return mutableMapOf()
            }

            override fun getSelectStatement(): String {
                return "select"
            }
        })

        return dbExchangeItems.map {
            ExchangeItem(
                id = it.id!!,
                name = it.itemName!!,
                value = it.exchangePoint!!,
            )
        }.toList()
    }
}
