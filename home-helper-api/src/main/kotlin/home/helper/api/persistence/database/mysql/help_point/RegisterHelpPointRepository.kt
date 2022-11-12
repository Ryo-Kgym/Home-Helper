/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.persistence.database.mysql.help_point

import home.helper.api.gateway.id.IdGateway
import home.helper.api.persistence.database.ListSaveRepository
import home.helper.api.persistence.database.mysql.id.HelpPointEarnedAchievementId
import home.helper.core.dto.help.RegisterHelpPointOutput
import home.helper.core.dto.save.SaveOutput
import org.springframework.stereotype.Repository

@Repository
class RegisterHelpPointRepository(
    private val helpPointEarnedAchievementIdGateway: IdGateway<HelpPointEarnedAchievementId>,
    helpPointEarnedAchievementInsertRepository: HelpPointEarnedAchievementInsertRepository,
    helpPointEarnedDetailInsertRepository: HelpPointEarnedDetailInsertRepository,
) : ListSaveRepository<RegisterHelpPointOutput>(
    helpPointEarnedAchievementInsertRepository,
    helpPointEarnedDetailInsertRepository,
) {
    override fun save(target: RegisterHelpPointOutput): SaveOutput {
        helpPointEarnedAchievementIdGateway.increment()
        return super.save(target)
    }
}