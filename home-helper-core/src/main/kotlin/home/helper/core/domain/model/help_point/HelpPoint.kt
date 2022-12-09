/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.domain.model.help_point

import home.helper.core.domain.model.help_item.HelpItem
import home.helper.core.domain.model.help_item.MultipleHelpItem

/**
 * お手伝いポイントを保持するクラスです。
 */
data class HelpPoint(
    val value: Int,
) {

    companion object {
        val ZERO = HelpPoint(0)

        /**
         * お手伝いポイントの総和を返します。
         * @param helpPoints お手伝いポイント（可変長引数）
         * @return 合算したお手伝いポイント
         */
        fun sum(vararg helpPoints: HelpPoint): HelpPoint {
            return sum(helpPoints.toList())
        }

        /**
         * お手伝いポイントの総和を返します。
         * @param helpPointList お手伝いポイントリスト
         * @return 合算したお手伝いポイント
         */
        fun sum(helpPointList: List<HelpPoint>): HelpPoint {
            return helpPointList.reduce { hp1, hp2 -> hp1.add(hp2) }
        }

        /**
         * お手伝いポイントの総和を返します。
         * @param helpItemList お手伝い項目リスト
         * @return 合算したお手伝いポイント
         */
        fun sumItem(helpItemList: List<HelpItem>): HelpPoint {
            return sum(helpItemList.map { it.helpPoint })
        }

        /**
         * お手伝いポイントの数量倍の総和を返します。
         * @param multipleHelpItems お手伝いポイントと数量
         * @return 合算したお手伝いポイント
         */
        fun sumOfProducts(multipleHelpItems: List<MultipleHelpItem>): HelpPoint {
            return sum(multipleHelpItems.map { it.calcSubtotalPoint() })
        }

    }

    /**
     * お手伝いポイント同士を加算したものを返します。
     * @param helpPoint 加算するお手伝いポイント
     * @return 加算したお手伝いポイント
     */
    fun add(helpPoint: HelpPoint): HelpPoint {
        return HelpPoint(value = this.value + helpPoint.value)
    }

    /**
     * お手伝いポイントの数量倍したものを返します。
     * @param count 数量
     * @return 数量倍したお手伝いポイント
     */
    fun times(count: Int): HelpPoint {
        return HelpPoint(value = this.value * count)
    }
}
