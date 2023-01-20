/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.gateway.exchange_item

import home.helper.core.domain.model.exchange_item.ExchangeItem
import home.helper.core.domain.model.exchange_item.ExchangeItemId
import home.helper.core.dto.SearchExchangeItemCriteria

interface SearchExchangeItemGateway {

    fun search(criteria: SearchExchangeItemCriteria = SearchExchangeItemCriteria()): List<ExchangeItem>

    fun findBy(id: ExchangeItemId): ExchangeItem?
}