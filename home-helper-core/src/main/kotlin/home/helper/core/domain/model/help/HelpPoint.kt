/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.domain.model.help

/**
 * お手伝いポイントを保持するクラスです。
 */
data class HelpPoint(
    val value: Int,
) {

    companion object {
        /**
         * お手伝いポイントの総和を返します。
         * @param helpPoints お手伝いポイント（可変長引数）
         * @return 合算したお手伝いポイント
         */
        fun sum(vararg helpPoints: HelpPoint): HelpPoint {
            return helpPoints.reduce { hp1, hp2 -> hp1.add(hp2) }
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
}
