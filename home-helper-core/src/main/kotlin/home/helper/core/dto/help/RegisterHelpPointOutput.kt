/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.dto.help

import home.helper.core.domain.model.help.HelpItem
import home.helper.core.domain.model.help.HelpPoint

data class RegisterHelpPointOutput(
    val helpItemList: List<HelpItem>,
    val totalHelpPoint: HelpPoint,
)
