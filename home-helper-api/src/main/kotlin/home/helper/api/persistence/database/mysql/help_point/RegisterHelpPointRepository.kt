/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.persistence.database.mysql.help_point

import home.helper.api.persistence.database.ListSaveRepository
import home.helper.core.dto.help.RegisterHelpPointOutput
import org.springframework.stereotype.Repository

@Repository
class RegisterHelpPointRepository(
    helpPointEarnedAchievementInsertRepository: HelpPointEarnedAchievementInsertRepository,
) : ListSaveRepository<RegisterHelpPointOutput>(
    helpPointEarnedAchievementInsertRepository
)