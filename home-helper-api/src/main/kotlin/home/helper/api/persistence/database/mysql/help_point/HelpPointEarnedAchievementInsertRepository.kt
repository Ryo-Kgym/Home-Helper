/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.persistence.database.mysql.help_point

import home.helper.api.gateway.id.IdGateway
import home.helper.api.persistence.database.ConvertSaveRepository
import home.helper.api.persistence.database.mysql.table.DbHelpPointEarnedAchievementMapper
import home.helper.api.persistence.database.mysql.table.DbHelpPointEarnedAchievementRecord
import home.helper.api.persistence.database.mysql.table.insertSelective
import home.helper.api.persistence.database.mysql.id.HelpPointEarnedAchievementId
import home.helper.core.dto.help.RegisterHelpPointOutput
import org.springframework.stereotype.Repository

@Repository
class HelpPointEarnedAchievementInsertRepository(
    private val helpPointEarnedAchievementIdGateway: IdGateway<HelpPointEarnedAchievementId>,
    private val dbHelpPointEarnedAchievementMapper: DbHelpPointEarnedAchievementMapper,
) : ConvertSaveRepository<RegisterHelpPointOutput, DbHelpPointEarnedAchievementRecord> {

    override fun convert(target: RegisterHelpPointOutput): DbHelpPointEarnedAchievementRecord {
        return DbHelpPointEarnedAchievementRecord(
            id = helpPointEarnedAchievementIdGateway.getId().id,
            userId = target.userId.id,
            earnedDate = target.earnedDate,
            earnedPoint = target.totalHelpPoint.value
        )
    }

    override fun internalSave(entity: DbHelpPointEarnedAchievementRecord): Int {
        return dbHelpPointEarnedAchievementMapper.insertSelective(entity)
    }
}