/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.core.dto.exchange_item

import home.helper.core.domain.model.exchange_item.ExchangePoint

data class RegisterExchangeItemOutput(
    val exchangeItemName: String,
    val exchangePoint: ExchangePoint,
    val memo: String?,
)
