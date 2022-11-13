/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.dto.help

import home.helper.core.domain.model.help.HelpPoint

data class RegisterHelpItemInput(
    val helpItemName: String,
    val helpPoint: HelpPoint,
    val memo: String,
)
