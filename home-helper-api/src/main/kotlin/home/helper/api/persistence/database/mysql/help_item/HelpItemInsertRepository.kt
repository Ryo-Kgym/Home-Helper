/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.persistence.database.mysql.help_item

import home.helper.api.persistence.database.ConvertSaveRepository
import home.helper.api.persistence.database.mysql.table.DbMHelpItemMapper
import home.helper.api.persistence.database.mysql.table.DbMHelpItemRecord
import home.helper.api.persistence.database.mysql.table.insertSelective
import home.helper.core.domain.model.save.SaveUseCaseEnum
import home.helper.core.dto.help.RegisterHelpItemOutput
import org.springframework.stereotype.Repository

@Repository
class HelpItemInsertRepository(
    private val dbMHelpItemMapper: DbMHelpItemMapper,
) : ConvertSaveRepository<RegisterHelpItemOutput, DbMHelpItemRecord> {

    override fun convert(target: RegisterHelpItemOutput): DbMHelpItemRecord {
        return DbMHelpItemRecord(
            itemName = target.helpItemName,
            helpPoint = target.helpPoint.value,
            memo = target.memo,
        )
    }

    override fun internalSave(entity: DbMHelpItemRecord): Int {
        return dbMHelpItemMapper.insertSelective(entity)
    }

    override fun getUseCase(): SaveUseCaseEnum {
        return SaveUseCaseEnum.REGISTER_HELP_ITEM
    }
}