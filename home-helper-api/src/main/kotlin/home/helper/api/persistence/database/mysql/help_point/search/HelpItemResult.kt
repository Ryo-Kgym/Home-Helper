/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.persistence.database.mysql.help_point.search

data class HelpItemResult(
    var itemId: String? = null,
    var itemName: String? = null,
    var helpPoint: Int? = null,
    var memo: String? = null,
)
