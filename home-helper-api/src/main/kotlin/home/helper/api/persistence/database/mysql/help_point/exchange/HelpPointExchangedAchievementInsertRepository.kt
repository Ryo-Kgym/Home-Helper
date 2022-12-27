/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.persistence.database.mysql.help_point.exchange

import org.springframework.stereotype.Repository
import home.helper.api.gateway.id.IdGateway
import home.helper.api.persistence.database.MultipleConvertSaveRepository
import home.helper.api.persistence.database.mysql.id.HelpPointExchangedAchievementId
import home.helper.api.persistence.database.mysql.table.DbHelpPointExchangedAchievementMapper
import home.helper.api.persistence.database.mysql.table.DbHelpPointExchangedAchievementRecord
import home.helper.api.persistence.database.mysql.table.insert
import home.helper.core.domain.model.save.SaveUseCaseEnum
import home.helper.core.dto.help_point.ExchangeHelpPointOutput

@Repository
class HelpPointExchangedAchievementInsertRepository(
    private val mapper: DbHelpPointExchangedAchievementMapper,
    private val idGateway: IdGateway<HelpPointExchangedAchievementId>
) : MultipleConvertSaveRepository<ExchangeHelpPointOutput, DbHelpPointExchangedAchievementRecord> {

    override fun convert(target: ExchangeHelpPointOutput): List<DbHelpPointExchangedAchievementRecord> {
        return target.exchangeItems.map {
            idGateway.increment()
            DbHelpPointExchangedAchievementRecord(
                id = idGateway.getId().id,
                userId = target.userId.id,
                exchangeItemId = it.exchangeItem.exchangeItemId.id,
                exchangeCount = it.count,
                exchangeTotalPoint = it.calcSubtotalPoint().point,
                exchangedDatetime = target.consumedDateTime,
            )
        }
    }

    override fun internalSave(entity: DbHelpPointExchangedAchievementRecord): Int {
        return mapper.insert(entity)
    }

    override fun getUseCase(): SaveUseCaseEnum {
        return SaveUseCaseEnum.EXCHANGE_HELP_POINT
    }
}