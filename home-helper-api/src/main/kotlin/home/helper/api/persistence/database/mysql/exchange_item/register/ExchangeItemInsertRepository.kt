/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.api.persistence.database.mysql.exchange_item.register

import org.springframework.stereotype.Repository
import home.helper.api.gateway.id.IdGateway
import home.helper.api.persistence.database.ConvertSaveRepository
import home.helper.api.persistence.database.mysql.table.DbMExchangeItemMapper
import home.helper.api.persistence.database.mysql.table.DbMExchangeItemRecord
import home.helper.api.persistence.database.mysql.table.insert
import home.helper.core.domain.model.exchange_item.ExchangeItemId
import home.helper.core.domain.model.save.SaveUseCaseEnum
import home.helper.core.dto.exchange_item.RegisterExchangeItemOutput

@Repository
class ExchangeItemInsertRepository(
    private val dbMExchangeItemMapper: DbMExchangeItemMapper,
    private val exchangeItemIdGateway: IdGateway<ExchangeItemId>,
) : ConvertSaveRepository<RegisterExchangeItemOutput, DbMExchangeItemRecord> {

    override fun convert(target: RegisterExchangeItemOutput): DbMExchangeItemRecord {
        return DbMExchangeItemRecord(
            id = exchangeItemIdGateway.getId().id,
            name = target.exchangeItemName,
            point = target.exchangePoint.point,
        )
    }

    override fun internalSave(entity: DbMExchangeItemRecord): Int {
        return dbMExchangeItemMapper.insert(entity)
    }

    override fun getUseCase(): SaveUseCaseEnum {
        return SaveUseCaseEnum.REGISTER_EXCHANGE_ITEM
    }
}