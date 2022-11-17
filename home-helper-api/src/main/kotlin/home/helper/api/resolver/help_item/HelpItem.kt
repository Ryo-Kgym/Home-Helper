/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.resolver.help_item

data class HelpItem(
    val id: Long,
    val name: String,
    val point: Long,
    val memo: String?,
)