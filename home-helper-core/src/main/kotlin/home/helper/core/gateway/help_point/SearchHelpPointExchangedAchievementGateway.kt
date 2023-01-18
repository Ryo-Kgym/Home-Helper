/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.core.gateway.help_point

import home.helper.core.domain.model.help_point.exchanged.HelpPointExchangedAchievement
import home.helper.core.domain.model.user.UserId

interface SearchHelpPointExchangedAchievementGateway {

    fun findBy(userId: UserId): List<HelpPointExchangedAchievement>
}