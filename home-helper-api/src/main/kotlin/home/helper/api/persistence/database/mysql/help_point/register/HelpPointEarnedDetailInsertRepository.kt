/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.persistence.database.mysql.help_point.register

import home.helper.api.gateway.id.IdGateway
import home.helper.api.persistence.database.MultipleConvertSaveRepository
import home.helper.api.persistence.database.mysql.id.HelpPointEarnedAchievementId
import home.helper.api.persistence.database.mysql.table.DbHelpPointEarnedDetailMapper
import home.helper.api.persistence.database.mysql.table.DbHelpPointEarnedDetailRecord
import home.helper.api.persistence.database.mysql.table.insertSelective
import home.helper.core.domain.model.save.SaveUseCaseEnum
import home.helper.core.dto.help_point.RegisterHelpPointOutput
import org.springframework.stereotype.Repository

@Repository
class HelpPointEarnedDetailInsertRepository(
    private val helpPointEarnedAchievementIdGateway: IdGateway<HelpPointEarnedAchievementId>,
    private val dbHelpPointEarnedDetailMapper: DbHelpPointEarnedDetailMapper,
) :
    MultipleConvertSaveRepository<RegisterHelpPointOutput, DbHelpPointEarnedDetailRecord> {

    override fun convert(target: RegisterHelpPointOutput): List<DbHelpPointEarnedDetailRecord> {
        return target.helpItemList.map {
            DbHelpPointEarnedDetailRecord(
                achievementId = helpPointEarnedAchievementIdGateway.getId().id,
                itemId = it.helpItemId.id,
            )
        }
    }

    override fun internalSave(entity: DbHelpPointEarnedDetailRecord): Int {
        return dbHelpPointEarnedDetailMapper.insertSelective(entity)
    }

    override fun getUseCase(): SaveUseCaseEnum {
        return SaveUseCaseEnum.REGISTER_HELP_POINT
    }

}