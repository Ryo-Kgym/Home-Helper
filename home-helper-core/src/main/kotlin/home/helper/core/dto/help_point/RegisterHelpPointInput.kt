/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.dto.help_point

import home.helper.core.domain.model.help_item.HelpItem
import home.helper.core.domain.model.user.UserId

data class RegisterHelpPointInput(
    val helpItemList: List<HelpItem>,
    val userId: UserId,
)