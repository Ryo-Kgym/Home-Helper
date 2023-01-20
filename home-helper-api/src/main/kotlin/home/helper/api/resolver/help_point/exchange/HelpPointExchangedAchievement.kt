/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.api.resolver.help_point.exchange

import java.time.LocalDateTime

data class HelpPointExchangedAchievement(
    val userId: String,
    val exchangeItemId: String,
    val exchangeCount: Int,
    val exchangeTotalPoint: Int,
    val exchangedDatetime: LocalDateTime,
)
