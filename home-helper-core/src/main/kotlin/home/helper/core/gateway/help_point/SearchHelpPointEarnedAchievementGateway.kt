/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.gateway.help_point

import home.helper.core.domain.model.help_point.earned.HelpPointEarnedAchievement
import home.helper.core.dto.help_point.SearchHelpPointEarnedCriteria

interface SearchHelpPointEarnedAchievementGateway {

    fun search(criteria: SearchHelpPointEarnedCriteria): List<HelpPointEarnedAchievement>
}