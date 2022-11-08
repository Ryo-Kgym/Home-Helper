/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.domain.model.exchange

/**
 * 交換品を保持するクラスです。
 */
data class ExchangeItem(
    val name: String,
    val exchangePoint: ExchangePoint,
) {
    constructor(name: String, value: Int) :
            this(name = name, exchangePoint = ExchangePoint(value))
}
