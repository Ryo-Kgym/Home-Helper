/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.dto

import home.helper.core.domain.model.exchange_item.ExchangeItemId

data class SearchExchangeItemCriteria(
    val id: ExchangeItemId? = null,
)
