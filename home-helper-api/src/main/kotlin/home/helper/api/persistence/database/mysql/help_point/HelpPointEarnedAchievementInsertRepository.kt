/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.persistence.database.mysql.help_point

import home.helper.api.persistence.database.ConvertSaveRepository
import home.helper.core.dto.help.RegisterHelpPointOutput
import org.springframework.stereotype.Repository

@Repository
class HelpPointEarnedAchievementInsertRepository :
    ConvertSaveRepository<RegisterHelpPointOutput, RegisterHelpPointOutput> {

    override fun convert(target: RegisterHelpPointOutput): RegisterHelpPointOutput {
        TODO("Not yet implemented")
    }

    override fun internalSave(entity: RegisterHelpPointOutput): Int {
        TODO("Not yet implemented")
    }
}