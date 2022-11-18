/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.dto.help_item

import home.helper.core.domain.model.help_item.HelpItemId

data class SearchHelpItemCriteria(
    val helpItemId: HelpItemId? = null,
)