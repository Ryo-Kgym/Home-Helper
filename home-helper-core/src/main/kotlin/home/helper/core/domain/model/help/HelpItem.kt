/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.domain.model.help

/**
 * お手伝いアイテムを保持するクラスです。
 */
data class HelpItem(
    val name: String,
    val helpPoint: HelpPoint,
) {

    constructor(name: String, value: Int)
            : this(name = name, helpPoint = HelpPoint(value))
}
