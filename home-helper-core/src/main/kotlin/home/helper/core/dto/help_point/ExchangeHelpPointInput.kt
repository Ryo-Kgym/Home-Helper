/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.dto.help_point

import home.helper.core.domain.model.exchange_item.MultipleExchangeItem
import home.helper.core.domain.model.user.UserId

data class ExchangeHelpPointInput(
    val exchangeItems: List<MultipleExchangeItem>,
    val userId: UserId,
)
