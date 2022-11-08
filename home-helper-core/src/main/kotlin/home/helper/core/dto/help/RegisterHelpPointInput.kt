/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.dto.help

import home.helper.core.domain.model.help.HelpItem

data class RegisterHelpPointInput(
    val helpItemList: List<HelpItem>,
)