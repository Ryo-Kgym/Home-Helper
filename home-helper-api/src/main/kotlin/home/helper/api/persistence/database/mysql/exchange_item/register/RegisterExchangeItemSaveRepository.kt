/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.api.persistence.database.mysql.exchange_item.register

import org.springframework.stereotype.Repository
import home.helper.api.gateway.id.IdGateway
import home.helper.api.persistence.database.ListSaveRepository
import home.helper.core.domain.model.exchange_item.ExchangeItemId
import home.helper.core.dto.exchange_item.RegisterExchangeItemOutput
import home.helper.core.dto.save.SaveOutput

@Repository
class RegisterExchangeItemSaveRepository(
    private val exchangeItemIdGateway: IdGateway<ExchangeItemId>,
    exchangeItemInsertRepository: ExchangeItemInsertRepository,
) : ListSaveRepository<RegisterExchangeItemOutput>(
    exchangeItemInsertRepository,
) {
    override fun save(target: RegisterExchangeItemOutput): SaveOutput {
        exchangeItemIdGateway.increment()
        return super.save(target)
    }
}