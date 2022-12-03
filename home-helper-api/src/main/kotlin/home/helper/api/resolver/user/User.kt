/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.resolver.user

data class User(
    val id: String,
    val name: String,
    val currentPoint: Long,
    val lastHelp: String,
)
