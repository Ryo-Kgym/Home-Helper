/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.resolver.help_item

data class HelpItem(
    val id: String,
    val name: String,
    val point: Int,
    val memo: String?,
)