/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.dto.help_point

import home.helper.core.domain.model.help_item.MultipleHelpItem
import home.helper.core.domain.model.user.UserId

data class RegisterHelpPointInput(
    val multipleHelpItems: List<MultipleHelpItem>,
    val userId: UserId,
)
