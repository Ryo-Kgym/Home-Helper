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
    companion object {
        /**
         * 交換品のポイントを生成します。
         * @param point ポイント
         * @return 交換品のポイント
         */
        fun valueOf(point: Int): ExchangePoint {
            return ExchangePoint(point)
        }

        /**
         * 交換品のポイントの合計を算出します。
         * @param multipleExchangeItems 複数の交換品
         * @return 交換品のポイントの合計
         */
        fun calcTotalPoint(vararg multipleExchangeItems: MultipleExchangeItem): ExchangePoint {
            return calcTotalPoint(multipleExchangeItems.toList())
        }

        /**
         * 交換品のポイントの合計を算出します。
         * @param multipleExchangeItems 複数の交換品
         * @return 交換品のポイントの合計
         */
        fun calcTotalPoint(multipleExchangeItems: List<MultipleExchangeItem>): ExchangePoint {
            return valueOf(multipleExchangeItems.sumOf { it.calcSubtotalPoint().point })
        }
    }

    /**
     * 交換ポイントの数量倍したものを返します。
     * @param count 数量
     * @return 数量倍した交換ポイント
     */
    fun times(count: Int): ExchangePoint {
        return ExchangePoint(point = this.point * count)
    }
}

