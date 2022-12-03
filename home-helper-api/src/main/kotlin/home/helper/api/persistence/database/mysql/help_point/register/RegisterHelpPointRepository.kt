/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.persistence.database.mysql.help_point.register

import home.helper.api.gateway.id.IdGateway
import home.helper.api.persistence.database.ListSaveRepository
import home.helper.api.persistence.database.mysql.id.HelpPointEarnedAchievementId
import home.helper.core.dto.help_point.RegisterHelpPointOutput
import home.helper.core.dto.save.SaveOutput
import org.springframework.stereotype.Repository

@Repository
class RegisterHelpPointRepository(
    private val helpPointEarnedAchievementIdGateway: IdGateway<HelpPointEarnedAchievementId>,
    helpPointEarnedAchievementInsertRepository: HelpPointEarnedAchievementInsertRepository,
    helpPointEarnedDetailInsertRepository: HelpPointEarnedDetailInsertRepository,
    totalHelpPointUpdateRepository: TotalHelpPointUpdateRepository,
) : ListSaveRepository<RegisterHelpPointOutput>(
    helpPointEarnedAchievementInsertRepository,
    helpPointEarnedDetailInsertRepository,
    totalHelpPointUpdateRepository,
) {
    override fun save(target: RegisterHelpPointOutput): SaveOutput {
        helpPointEarnedAchievementIdGateway.increment()
        return super.save(target)
    }

    override fun getIndex(): Int {
        return 1
    }
}