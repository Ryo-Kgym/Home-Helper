/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.persistence.database.mysql.exchange_item

import org.mybatis.dynamic.sql.select.render.SelectStatementProvider
import org.springframework.stereotype.Repository
import home.helper.api.persistence.database.mysql.table.DbMExchangeItemMapper
import home.helper.api.persistence.database.mysql.table.selectByPrimaryKey
import home.helper.core.domain.model.exchange_item.ExchangeItem
import home.helper.core.domain.model.exchange_item.ExchangeItemId
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
                return "select id, name, point from m_exchange_item order by id;"
            }
        })

        return dbExchangeItems.map {
            ExchangeItem(
                id = it.id!!,
                name = it.name!!,
                point = it.point!!,
            )
        }.toList()
    }

    override fun findBy(id: ExchangeItemId): ExchangeItem? {
        return dbMExchangeItemMapper.selectByPrimaryKey(id.id)
            .let {
                ExchangeItem(
                    id = it!!.id!!,
                    point = it.point!!,
                    name = it.name!!
                )
            }
    }
}
