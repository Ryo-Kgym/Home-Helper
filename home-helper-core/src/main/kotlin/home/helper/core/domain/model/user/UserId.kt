/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.domain.model.user

data class UserId(
    val id: String
) {
    companion object {
        fun valueOf(id: String): UserId {
            return UserId(id)
        }
    }
}
