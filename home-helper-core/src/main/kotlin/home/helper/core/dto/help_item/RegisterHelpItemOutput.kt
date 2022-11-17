/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.dto.help_item

import home.helper.core.domain.model.help_point.HelpPoint

data class RegisterHelpItemOutput(
    val helpItemName: String,
    val helpPoint: HelpPoint,
    val memo: String?,
)
