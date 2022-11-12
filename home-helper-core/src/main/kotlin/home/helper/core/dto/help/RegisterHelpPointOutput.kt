/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.dto.help

import home.helper.core.domain.model.help.HelpItem
import home.helper.core.domain.model.help.HelpPoint
import home.helper.core.domain.model.user.UserId
import java.time.LocalDate

data class RegisterHelpPointOutput(
    val helpItemList: List<HelpItem>,
    val totalHelpPoint: HelpPoint,
    val userId: UserId,
    val earnedDate: LocalDate,
)
