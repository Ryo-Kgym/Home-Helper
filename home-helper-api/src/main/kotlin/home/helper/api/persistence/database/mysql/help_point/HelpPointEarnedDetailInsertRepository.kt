/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.persistence.database.mysql.help_point

import home.helper.api.persistence.database.MultipleConvertSaveRepository
import home.helper.api.persistence.database.mysql.table.DbHelpPointEarnedDetailMapper
import home.helper.api.persistence.database.mysql.table.DbHelpPointEarnedDetailRecord
import home.helper.api.persistence.database.mysql.table.insertSelective
import home.helper.core.dto.help.RegisterHelpPointOutput
import org.springframework.stereotype.Repository

@Repository
class HelpPointEarnedDetailInsertRepository(
    private val dbHelpPointEarnedDetailMapper: DbHelpPointEarnedDetailMapper,
) :
    MultipleConvertSaveRepository<RegisterHelpPointOutput, DbHelpPointEarnedDetailRecord> {

    override fun convert(target: RegisterHelpPointOutput): List<DbHelpPointEarnedDetailRecord> {
        return target.helpItemList.map {
            DbHelpPointEarnedDetailRecord(
                achievementId = 1, // TODO
                itemId = it.helpItemId.id,
            )
        }
    }

    override fun internalSave(entity: DbHelpPointEarnedDetailRecord): Int {
        return dbHelpPointEarnedDetailMapper.insertSelective(entity)
    }

}