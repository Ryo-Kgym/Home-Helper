/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.domain.model.help

/**
 * お手伝い項目を保持するクラスです。
 */
data class HelpItem(
    val helpItemId: HelpItemId,
    val name: String,
    val helpPoint: HelpPoint,
) {

    constructor(id: Int, name: String, value: Int) :
            this(
                helpItemId = HelpItemId(id),
                name = name,
                helpPoint = HelpPoint(value)
            )
}
