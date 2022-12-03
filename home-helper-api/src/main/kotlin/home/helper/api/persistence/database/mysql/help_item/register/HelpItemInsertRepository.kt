/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.persistence.database.mysql.help_item.register

import home.helper.api.persistence.database.ConvertSaveRepository
import home.helper.api.persistence.database.mysql.table.DbMHelpItemMapper
import home.helper.api.persistence.database.mysql.table.DbMHelpItemRecord
import home.helper.api.persistence.database.mysql.table.insertSelective
import home.helper.core.domain.model.save.SaveUseCaseEnum
import home.helper.core.dto.help_item.RegisterHelpItemOutput
import org.springframework.stereotype.Repository
import home.helper.api.gateway.id.IdGateway
import home.helper.api.persistence.database.mysql.table.insert
import home.helper.core.domain.model.help_item.HelpItemId

@Repository
class HelpItemInsertRepository(
    private val dbMHelpItemMapper: DbMHelpItemMapper,
    private val idGateway: IdGateway<HelpItemId>,
) : ConvertSaveRepository<RegisterHelpItemOutput, DbMHelpItemRecord> {

    override fun convert(target: RegisterHelpItemOutput): DbMHelpItemRecord {
        return DbMHelpItemRecord(
            id = idGateway.getId().id,
            itemName = target.helpItemName,
            helpPoint = target.helpPoint.value,
            memo = target.memo,
        )
    }

    override fun internalSave(entity: DbMHelpItemRecord): Int {
        return dbMHelpItemMapper.insert(entity)
    }

    override fun getUseCase(): SaveUseCaseEnum {
        return SaveUseCaseEnum.REGISTER_HELP_ITEM
    }
}