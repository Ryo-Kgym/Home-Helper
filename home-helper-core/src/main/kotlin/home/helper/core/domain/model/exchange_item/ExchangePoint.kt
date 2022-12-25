/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.domain.model.exchange_item

/**
 * 交換品のポイントを保持するクラスです。
 */
data class ExchangePoint(
    val point: Int
) {
    /**
     * 交換ポイントの数量倍したものを返します。
     * @param count 数量
     * @return 数量倍した交換ポイント
     */
    fun times(count: Int): ExchangePoint {
        return ExchangePoint(point = this.point * count)
    }
}

