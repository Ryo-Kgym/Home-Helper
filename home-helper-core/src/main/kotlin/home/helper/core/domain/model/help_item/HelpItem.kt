/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.domain.model.help_item

import home.helper.core.domain.model.help_point.HelpPoint

/**
 * お手伝い項目を保持するクラスです。
 */
data class HelpItem(
    val helpItemId: HelpItemId,
    val name: String,
    val helpPoint: HelpPoint,
    val memo: String? = null,
) {

    constructor(id: String,
                name: String,
                point: Int,
                memo: String? = null
    ) :
            this(
                helpItemId = HelpItemId(id),
                name = name,
                helpPoint = HelpPoint(point),
                memo = memo,
            )
}