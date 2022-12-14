/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.dto.help_point

import java.time.LocalDateTime
import home.helper.core.domain.model.exchange_item.ExchangePoint
import home.helper.core.domain.model.exchange_item.MultipleExchangeItem
import home.helper.core.domain.model.user.UserId

data class ExchangeHelpPointOutput(
    val exchangeItems: List<MultipleExchangeItem>,
    val userId: UserId,
    val consumedDateTime: LocalDateTime,
    val totalPoint: ExchangePoint,
)
