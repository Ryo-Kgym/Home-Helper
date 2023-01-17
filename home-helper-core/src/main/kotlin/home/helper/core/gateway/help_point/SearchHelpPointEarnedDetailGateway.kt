/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.gateway.help_point

import home.helper.core.domain.model.help_point.earned.HelpPointEarnedAchievementId
import home.helper.core.domain.model.help_point.earned.HelpPointEarnedDetail

interface SearchHelpPointEarnedDetailGateway {

    fun findBy(id: HelpPointEarnedAchievementId): List<HelpPointEarnedDetail>
}