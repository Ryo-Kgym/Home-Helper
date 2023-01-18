/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.core.domain.model.help_point.exchanged

import java.time.LocalDateTime
import home.helper.core.domain.model.exchange_item.ExchangeItemId
import home.helper.core.domain.model.exchange_item.ExchangePoint
import home.helper.core.domain.model.user.UserId

data class HelpPointExchangedAchievement(
    val userId: UserId,
    val exchangeItemId: ExchangeItemId,
    val exchangeCount: Int,
    val exchangeTotalPoint: ExchangePoint,
    val exchangedDatetime: LocalDateTime,
)