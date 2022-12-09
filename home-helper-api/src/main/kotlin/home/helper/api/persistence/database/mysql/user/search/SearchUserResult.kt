/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.persistence.database.mysql.user.search

import java.time.LocalDateTime

data class SearchUserResult(
    var id: String? = null,
    var name: String? = null,
    var nameSuffix: String? = null,
    var point: Int? = null,
    var lastHelpDatetime: LocalDateTime? = null,
)
