/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.persistence.database.mysql.help_point.search

import java.time.LocalDate

data class SearchHelpPointResult(
    var id: Long? = null,
    var userId: String? = null,
    var earnedDate: LocalDate? = null,
    var earnedPoint: Long? = null,
    var detailList: List<HelpItemResult>? = null,
)