/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.domain.model.exchange_item

/**
 * 交換品を保持するクラスです。
 */
data class ExchangeItem(
    val exchangeItemId: ExchangeItemId,
    val name: String,
    val exchangePoint: ExchangePoint,
) {
    constructor(id: String,
                name: String,
                point: Int
    ) :
            this(
                exchangeItemId = ExchangeItemId.valueOf(id),
                name = name,
                exchangePoint = ExchangePoint.valueOf(point)
            )
}
