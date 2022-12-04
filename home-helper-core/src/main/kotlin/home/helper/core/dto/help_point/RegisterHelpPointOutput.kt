/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.dto.help_point

import java.time.LocalDateTime
import home.helper.core.domain.model.help_item.MultipleHelpItem
import home.helper.core.domain.model.help_point.HelpPoint
import home.helper.core.domain.model.user.UserId

data class RegisterHelpPointOutput(
    val helpItemList: List<MultipleHelpItem>,
    val totalHelpPoint: HelpPoint,
    val userId: UserId,
    val earnedDateTime: LocalDateTime,
)
