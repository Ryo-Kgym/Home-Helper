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
    val memo: String? = null,
) {

    constructor(id: Long, name: String, value: Long) :
            this(
                helpItemId = HelpItemId(id),
                name = name,
                helpPoint = HelpPoint(value)
            )
}
