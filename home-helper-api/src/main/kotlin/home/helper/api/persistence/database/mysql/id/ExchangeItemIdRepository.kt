/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.api.persistence.database.mysql.id

import home.helper.api.gateway.id.IdGateway
import home.helper.api.persistence.database.mysql.table_customize.IdHolderCustomRepository
import home.helper.core.domain.model.exchange_item.ExchangeItemId

class ExchangeItemIdRepository(
    private val idHolderCustomRepository: IdHolderCustomRepository,
) : IdGateway<ExchangeItemId> {
    private val idType = IdType.EXCHANGE_ITEM_ID

    override fun increment() {
        idHolderCustomRepository.incrementId(idType)
    }

    override fun getId(): ExchangeItemId {
        val id = idHolderCustomRepository.getCurrentId(idType)
        return ExchangeItemId.valueOf(id)
    }
}