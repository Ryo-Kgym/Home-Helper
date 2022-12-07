/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.domain.model.help_item

import home.helper.core.domain.model.help_point.HelpPoint

/**
 * 数量をもつお手伝い項目を保持するクラスです。
 */
data class MultipleHelpItem(
    val helpItem: HelpItem,
    val count: Int,
) {
    constructor(id: String,
                name: String,
                point: Int,
                memo: String? = null,
                count: Int
    ) : this(
        helpItem = HelpItem(id = id, name = name, memo = memo, point = point),
        count = count
    )

    /**
     * お手伝いポイントと数量をかけた小計を返します。
     * @return 小計ポイント
     */
    fun calcSubtotalPoint(): HelpPoint {
        return this.helpItem.helpPoint.times(this.count)
    }
}