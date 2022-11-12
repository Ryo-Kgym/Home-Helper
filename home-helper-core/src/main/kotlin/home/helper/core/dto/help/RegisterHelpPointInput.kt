/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.dto.help

import home.helper.core.domain.model.help.HelpItem
import home.helper.core.domain.model.user.UserId

data class RegisterHelpPointInput(
    val helpItemList: List<HelpItem>,
    val userId: UserId,
)