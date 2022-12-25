/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.domain.model.exchange_item

/**
 * 数量をもつ交換品を保持するクラスです。
 */
data class MultipleExchangeItem(
    val exchangeItem: ExchangeItem,
    val count: Int,
) {
    constructor(id: String,
                name: String,
                point: Int,
                count: Int
    ) : this(
        exchangeItem = ExchangeItem(id = id, name = name, point = point),
        count = count
    )
}