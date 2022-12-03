/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.dto.help_point

import home.helper.core.domain.model.help_item.HelpItem
import home.helper.core.domain.model.help_point.HelpPoint
import home.helper.core.domain.model.user.UserId
import java.time.LocalDateTime

data class RegisterHelpPointOutput(
    val helpItemList: List<HelpItem>,
    val totalHelpPoint: HelpPoint,
    val userId: UserId,
    val earnedDateTime: LocalDateTime,
)
